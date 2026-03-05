function FormSearch({search, setSearch}) {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Escribe el pokémon" value={search} onChange={(e) => setSearch(e.target.value)} />
        </form>
    );
}

export default FormSearch;