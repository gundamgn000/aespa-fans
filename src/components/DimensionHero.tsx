export function DimensionHero() {
  return (
    <section className="dimension-hero" id="home">
      <div className="dimension-meta">
        <span className="eyebrow">AESPA FAN PROJECT / UNIVERSE 04</span>
        <span className="edition">D — NEW DIMENSION</span>
      </div>
      <div className="dimension-scenery" aria-hidden="true">
        <div className="dimension-mist" /><div className="dimension-moon" /><div className="dimension-floor" />
        <div className="dimension-portal">
          <div className="portal-frame frame-back" /><div className="portal-frame frame-middle" /><div className="portal-frame frame-front" />
          <span className="portal-mark">æ</span>
        </div>
        <div className="portal-reflection" /><span className="dimension-star star-a">✦</span><span className="dimension-star star-b">+</span>
      </div>
      <div className="dimension-copy">
        <p className="dimension-kicker"><span /> REAL WORLD. ANOTHER SIDE.</p>
        <h1>NEW<br /><span>DIMENSION</span><i>.</i></h1>
        <h2>世界之外，<br />我們再次相遇。</h2>
        <p className="dimension-intro">跟著四道光，走進 aespa 的另一個維度。<br />音樂、相遇，與屬於 MY 的每一刻。</p>
        <a className="button dimension-enter" href="#members">開啟新維度 <span>↗</span></a>
      </div>
      <div className="dimension-bottom">
        <span className="dimension-coordinate">MY WORLD / YOUR WORLD<br /><b>CONNECTED THROUGH MUSIC.</b></span>
        <a href="#members" className="dimension-scroll">EXPLORE THE UNIVERSE <span>↓</span></a>
        <span className="dimension-count">04 <small>VOICES<br />ONE CONNECTION</small></span>
      </div>
    </section>
  );
}
