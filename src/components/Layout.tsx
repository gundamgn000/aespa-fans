import { editions, type Edition } from '../editions';
import { useState } from 'react';
export function Navbar({ edition = 'b' }: { edition?: Edition }) { const [open, setOpen] = useState(false); return <header className="navbar"><a className="brand" href="#home" aria-label="aespa 首頁">æspa<span>FAN ARCHIVE</span></a><div className="edition-switch" aria-label="設計版本">{(['a', 'b', 'c', 'd'] as Edition[]).map(key => <a key={key} href={'?edition=' + key} aria-current={edition === key ? 'page' : undefined} aria-label={key.toUpperCase() + ' 版 ' + editions[key].name}>{key.toUpperCase()}</a>)}</div><button className="menu-toggle" aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>{open ? '關閉 −' : '選單 +'}</button><nav id="main-nav" className={open ? 'is-open' : ''} aria-label="主要導覽">{[['members', '成員'], ['music', '音樂'], ['schedule', '行程'], ['journal', '消息']].map(([id, label]) => <a key={id} href={'#' + id} onClick={() => setOpen(false)}>{label}</a>)}<a href="#about" onClick={() => setOpen(false)} className="nav-about">ABOUT MY ↗</a></nav></header>; }
export function ChromeArt() { return <div className="chrome-art" aria-hidden="true"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit orbit-three"/><div className="orb"/><div className="art-spark">✦</div></div>; }
export function SectionTitle({ no, en, zh }: {
    no: string;
    en: string;
    zh: string;
}) { return <div className="section-title"><div><span className="eyebrow">{no} / THE ARCHIVE</span><h2>{en}<span>{zh}</span></h2></div><span className="cross" aria-hidden="true">+</span></div>; }
export function Footer({ edition = 'b' }: { edition?: Edition }) { return <footer id="about"><div className="footer-top"><div><span className="eyebrow">FROM MY, WITH LOVE.</span><h2>在這裡，<br />熱愛有了形狀。</h2></div><a href="#home" className="back-top">BACK TO TOP ↗</a></div><div className="footer-bottom"><a className="brand" href="#home">æspa</a><p>非官方粉絲網站・與 aespa 及其經紀公司無隸屬關係。<br />{editions[edition].name} / 視覺提案。圖像為概念佔位素材，活動與文章為展示內容。</p><span>MADE FOR MY<br />© 2026 FAN PROJECT</span></div></footer>; }


