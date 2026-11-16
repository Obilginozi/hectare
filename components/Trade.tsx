import { trade } from "@/lib/content";

export function Trade() {
  return (
    <section className="section page" aria-labelledby="ticaret-title">
      <div className="wrap">
        <p className="kicker">Hectare Foreign Trade</p>
        <h1 id="ticaret-title">Ticaret</h1>
        <p className="lede">
          On yıldan uzun süredir uluslararası ticaret. Değişik sektörlerde satış ve projeler. Ülkeler,
          bu çalışmaların geçtiği yerlerdir.
        </p>
        <ul className="trade-list">
          {trade.map((item) => (
            <li key={item.country}>
              <strong>{item.country}</strong>
              {item.works.length > 0 ? <span>{item.works.join(" · ")}</span> : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
