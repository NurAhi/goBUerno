export const DniForm = ({ handleOnChange, doctorSearch, SearchInput }: any) => (
  <form className="c-input-search">
    <input
      className="c-input-search__input"
      type="search"
      onChange={handleOnChange}
      placeholder="Comprueba tu DNI"
      value={SearchInput}
    />
    <button
      className="c-input-search__button"
      type="submit"
      onClick={doctorSearch}
    >
      Buscar
    </button>
  </form>
);
