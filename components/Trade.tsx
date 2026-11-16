import { trade } from "@/lib/content";

export function Trade() {
  const named = trade.filter((item) => item.works.length > 0);
  const places = trade.filter((item) => item.works.length === 0);

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
          {named.map((item) => (
            <li key={item.country}>
              <strong>{item.country}</strong>
              <span>{item.works.join(" · ")}</span>
            </li>
          ))}
        </ul>
        <ul className="country-index" aria-label="Diğer ülkeler">
          {places.map((item) => (
            <li key={item.country}>{item.country}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
