export const DniForm = ({ setSearchInput, doctorSearch }: any) => (
  <form className="c-input-search">
    <input
      className="c-input-search__input"
      type="search"
      onChange={(e) => setSearchInput(e.target.value)}
      placeholder="Comprueba tu DNI"
    />
    <button
      className="c-input-search__button"
      type="button"
      onClick={() => doctorSearch()}
    >
      Buscar
    </button>
  </form>
);
