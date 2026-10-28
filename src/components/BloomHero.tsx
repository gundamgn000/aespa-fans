export function BloomHero() {
  return (
    <section id="home" className="bloom-hero">
      <div className="bloom-top"><span>C / HYPER BLOOM</span><span>A NEW WAY TO FEEL.</span><span>MY WORLD / VOL. 04</span></div>
      <div className="bloom-art" aria-hidden="true"><div className="bloom-orbit"/><div className="bloom-flower">{[0,1,2,3,4,5].map(n=><div key={n} className={`bloom-petal petal-${n}`}/>)}<div className="bloom-core">æ</div></div><span className="bloom-spark spark-one">✳</span><span className="bloom-spark spark-two">+</span></div>
      <div className="bloom-copy"><span className="bloom-caption">FOUR COLORS. INFINITE POSSIBILITIES.</span><h1>Beyond<br/><em>the bloom.</em></h1><div className="bloom-subtitle"><span>æspa</span><p>不只一種光芒。<br/>每一面，都值得盛放。</p></div><p className="bloom-intro">把音樂的稜角、舞台的光，<br/>和每一次心動，收藏進我們的世界。</p><a href="#members" className="button bloom-enter">發現另一面的 æspa <span>↗</span></a></div>
      <div className="bloom-bottom"><span>FUTURE IN FULL BLOOM.</span><div className="bloom-colors" aria-hidden="true"><i/><i/><i/><i/></div><a href="#members">MEET THE FOUR ↓</a></div>
    </section>
  );
}
