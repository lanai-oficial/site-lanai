"use client";

import Link from "next/link";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import servicesCatalog from "@/data/lanai_33_servicos_v1_producao.json";
import { rememberSearchAttribution, trackEvent } from "@/lib/analytics";

function normalize(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("pt-BR").replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ").trim();
}

const searchableServices = servicesCatalog.categorias.flatMap((category) => category.servicos.map((service) => ({
  id: service.id,
  href: `/servicos/${service.id}`,
  type: "Serviço",
  name: service.nome,
  description: service.tier1.frase_curta,
  category: category.nome,
  categoryId: category.id,
  searchText: normalize([service.nome, service.tier1.frase_curta, service.tier2.gancho, service.tier2.descricao, category.nome,
    category.id === "hair-spa" ? "cabelo cabelos mecha mechas" : "",
    category.id === "manicure" || category.id === "nail-design" ? "unha unhas" : "",
  ].join(" ")),
})));

export function SiteSearch({ home = false }: { home?: boolean }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const normalizedQuery = normalize(submittedQuery);
  const results = useMemo(() => {
    if (!normalizedQuery) return [];
    const words = normalizedQuery.split(" ");
    return searchableServices.filter(({ searchText }) => words.every((word) => searchText.includes(word)));
  }, [normalizedQuery]);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", close);
    document.body.classList.add("search-is-open");
    return () => { document.removeEventListener("keydown", close); document.body.classList.remove("search-is-open"); };
  }, [open]);

  function submit(event: FormEvent) {
    event.preventDefault();
    const cleanQuery = normalize(query).slice(0, 80);
    if (!cleanQuery) return;
    setSubmittedQuery(query.trim());
    const matches = searchableServices.filter(({ searchText }) => cleanQuery.split(" ").every((word) => searchText.includes(word)));
    trackEvent("search_submit", { query: cleanQuery, search_term: cleanQuery, results_count: matches.length });
    if (!matches.length) trackEvent("search_no_results", { search_term: cleanQuery });
  }

  function selectResult(id: string, category: string, categoryId: string, position: number) {
    const search = { search_term: normalizedQuery, result_id: id, category };
    rememberSearchAttribution(search);
    trackEvent("search_result_click", { query: normalizedQuery, search_term: normalizedQuery, service_id: id, result_id: id, category_id: categoryId, category, position, destination: "service_detail" });
    setOpen(false);
  }

  return <>
    <button className={home ? "home-search-trigger" : "search-trigger"} type="button" aria-label="Abrir busca" aria-expanded={open} onClick={() => { setOpen(true); trackEvent("search_open", { page: window.location.pathname }); }}>
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.5 4.5"/></svg>
    </button>
    {open && <div className="search-overlay" role="dialog" aria-modal="true" aria-labelledby="search-title">
      <button className="search-close" type="button" aria-label="Fechar busca" onClick={() => setOpen(false)}>×</button>
      <div className="search-panel">
        <p className="eyebrow">Encontre seu cuidado</p><h2 id="search-title">O que você procura?</h2>
        <form className="search-form" role="search" onSubmit={submit}>
          <label className="sr-only" htmlFor="lanai-search">Pesquise serviços e cuidados</label>
          <input id="lanai-search" ref={inputRef} value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Ex.: luzes, massagem, pele…" autoComplete="off" />
          <button type="submit">Pesquisar</button>
        </form>
        {submittedQuery && <div className="search-results" aria-live="polite">
          <p className="search-summary">{results.length ? `${results.length} ${results.length === 1 ? "resultado" : "resultados"} para “${submittedQuery}”` : `Nenhum resultado para “${submittedQuery}”`}</p>
          {!results.length && <p className="search-empty">Não encontrou o que imaginava? Fale com a recepção — sua pesquisa também nos ajuda a entender novos interesses.</p>}
          {results.map((result, index) => <article className="search-result" key={result.id}>
            <div><span>{result.type} · {result.category}</span><h3>{result.name}</h3><p>{result.description}</p></div>
            <Link href={result.href} onClick={() => selectResult(result.id, result.category, result.categoryId, index + 1)}>Conhecer <span aria-hidden="true">→</span></Link>
          </article>)}
        </div>}
      </div>
    </div>}
  </>;
}
