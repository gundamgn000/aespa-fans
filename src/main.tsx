import React, { useState, useRef, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Navbar, SectionTitle, Footer } from './components/Layout';
import { ChromeHero } from './components/ChromeHero';
import { DimensionHero } from './components/DimensionHero';
import { SignalHero } from './components/SignalHero';
import { BloomHero } from './components/BloomHero';
import { editions, resolveEdition } from './editions';
import './styles/base.css';
import './styles/chrome.css';
import './styles/home.css';
import './styles/dimension.css';
import './styles/signal.css';
import './styles/bloom.css';
const edition = resolveEdition(new URLSearchParams(window.location.search).get('edition'));
const Hero = { a: SignalHero, b: ChromeHero, c: BloomHero, d: DimensionHero }[edition];
const members = [
    { name: 'KARINA', symbol: '✦', code: '01', note: 'A presence beyond the frame.', color: 'violet' },
    { name: 'GISELLE', symbol: '◈', code: '02', note: 'An energy of her own.', color: 'rose' },
    { name: 'WINTER', symbol: '✳', code: '03', note: 'A new shade of brilliance.', color: 'blue' },
    { name: 'NINGNING', symbol: '✷', code: '04', note: 'Impossible to overlook.', color: 'gold' },
];
const albums = [{ name: 'Armageddon', type: 'THE 1ST ALBUM', year: '2024', style: 'armageddon' }, { name: 'Drama', type: 'THE 4TH MINI ALBUM', year: '2023', style: 'drama' }, { name: 'MY WORLD', type: 'THE 3RD MINI ALBUM', year: '2023', style: 'world' }];
const events = [{ day: '08', month: 'NOV', kind: '應援企劃', title: 'MY 的週末・應援交流', place: '台北 / 地點待定', detail: '展示活動：示範應援交流的日期、地點與說明呈現。這不是已公布或可報名的真實活動。' }, { day: '15', month: 'NOV', kind: '粉絲活動', title: '一起收藏，那些閃耀時刻', place: '線上 / 展示活動', detail: '展示活動：示範線上粉絲交流內容，沒有實際活動或報名安排。' }, { day: '22', month: 'NOV', kind: '應援企劃', title: '下一站，與你相見', place: '地點待定 / 展示活動', detail: '展示活動：正式網站將由管理員更新時間、場地及官方來源。' }];
type Detail = {
    title: string;
    label: string;
    body: string;
};
function App() {
    useEffect(() => {
        document.title = `aespa — ${editions[edition].name}`;
        document.querySelector('meta[name="theme-color"]')?.setAttribute('content', editions[edition].color);
    }, []);
    const [detail, setDetail] = useState<Detail | null>(null);
    const [filter, setFilter] = useState('全部');
    const dialog = useRef<HTMLDialogElement>(null);
    useEffect(() => { if (detail)
        dialog.current?.showModal(); }, [detail]);
    function close() { dialog.current?.close(); setDetail(null); }
    return <div className={`theme-chrome ${editions[edition].theme}`}><Navbar edition={edition} /><main><Hero />
    <div className="ticker" aria-hidden="true"><span>WELCOME TO MY WORLD</span><b>✦</b><span>BEYOND THE REAL</span><b>✦</b><span>FOUR VOICES. ONE UNIVERSE.</span><b>✦</b></div>
    <section className="section members" id="members"><SectionTitle no="01" en="THE FOUR." zh="四種光芒，同一個世界。"/><div className="member-grid">{members.map(m => <button className={'member-card ' + m.color} key={m.name} onClick={() => setDetail({ title: m.name, label: 'MEMBER / ' + m.code, body: `${m.name} 的成員介紹入口。正式版本將整理人物介紹、訪談與趣味影片連結；目前圖像為字形概念稿，等待提供選定照片與介紹內容。` })}><div className="member-art"><span className="member-no">æ / {m.code}</span><span className="member-symbol">{m.symbol}</span><span className="placeholder-note">PORTRAIT / COMING SOON</span></div><div className="member-name"><h3>{m.name}</h3><span>↗</span></div><p>{m.note}</p></button>)}</div><p className="section-footnote">四個名字，無數個一起走過的瞬間。 <span>成員肖像待置入 · 現為概念視覺</span></p></section>
    <section className="section music" id="music"><SectionTitle no="02" en="ON REPEAT." zh="讓世界，跟著我們的頻率。"/><div className="album-grid">{albums.map((a, i) => <button className="album" key={a.name} onClick={() => setDetail({ title: a.name, label: a.type + ' / ' + a.year, body: '專輯展示入口。正式版將補上授權封面、專輯介紹、完整曲目與官方 YouTube 連結。目前封面是原創排版佔位，並非正式唱片封面。' })}><div className={'album-cover ' + a.style}><span className="album-label">AESPA / CONCEPT COVER</span><div className="album-art"/><strong>{a.name}</strong><span className="album-corner">↗</span></div><div className="album-info"><div><span className="eyebrow">{a.type}</span><h3>{a.name}</h3></div><span>{a.year}<small>0{i + 1}</small></span></div></button>)}</div><div className="music-note"><span>YOUR NEXT FAVORITE SOUND.</span><a href="https://www.youtube.com/@aespa" target="_blank" rel="noreferrer">前往 aespa 官方 YouTube ↗</a></div></section>
    <section className="section schedule" id="schedule"><SectionTitle no="03" en="SEE YOU THERE." zh="下一次相見，記在心上。"/><div className="schedule-bar"><p><span className="status-dot"/> NOVEMBER 2026 <span className="demo-tag">展示行程，非官方公告</span></p><div className="filters" aria-label="活動分類">{['全部', '應援企劃', '粉絲活動'].map(f => <button key={f} aria-pressed={filter === f} onClick={() => setFilter(f)}>{f}</button>)}</div></div><div className="events">{events.filter(e => filter === '全部' || e.kind === filter).map(e => <button className="event" key={e.day} onClick={() => setDetail({ title: e.title, label: 'DEMO EVENT / NOV ' + e.day, body: e.detail })}><div className="date"><strong>{e.day}</strong><span>{e.month}</span></div><span className="event-kind">{e.kind}</span><h3>{e.title}<small>{e.place}</small></h3><span className="event-arrow">↗</span></button>)}</div></section>
    <section className="section journal" id="journal"><SectionTitle no="04" en="DEAR MY." zh="把熱愛，寫成日常。"/><div className="journal-grid">{[{ type: 'PROJECT NOTE', title: '一個為 MY 而生的地方。', body: '從一份熱愛開始，把關於 aespa 的片段整理成能夠一起分享的收藏。這是網站創作方向的展示文章。', art: 'æ' }, { type: 'FAN JOURNAL', title: '把每一次相遇，好好收藏。', body: '未來這裡將分享應援企劃、粉絲公告與活動紀錄。此為展示文章，尚未對應真實活動。', art: 'MY' }].map((j, i) => <button className="journal-card" key={j.title} onClick={() => setDetail({ title: j.title, label: j.type + ' / 展示文章', body: j.body })}><div className={'journal-art journal-art-' + i}><span>{j.art}</span><small>NOTES FROM OUR UNIVERSE</small></div><div><span className="eyebrow">{j.type} / DEMO</span><h3>{j.title}<span>↗</span></h3><p>{j.body.split('。')[0]}。</p></div></button>)}</div></section></main><Footer edition={edition} /><dialog aria-labelledby="detail-title" ref={dialog} onCancel={() => setDetail(null)} onClick={e => { if (e.target === dialog.current)
        close(); }}><button className="dialog-close" onClick={close} aria-label="關閉詳細內容" autoFocus>關閉 ×</button><span className="eyebrow">{detail?.label}</span><h2 id="detail-title">{detail?.title}</h2><p>{detail?.body}</p><button className="button button-dark" onClick={close}>回到首頁 ↗</button></dialog></div>;
}
createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>);
