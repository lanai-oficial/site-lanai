import Link from "next/link";
export default function NotFound() { return <div className="section page not-found"><p className="eyebrow">Erro 404</p><h1>Página não encontrada</h1><p>O conteúdo pode ter sido removido ou estar temporariamente indisponível.</p><Link className="button" href="/">Voltar ao início</Link></div>; }
