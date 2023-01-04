export const getGifs = async(categoria) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=FA1koRe5DG6Cmwhsozm1OIwsJzMl4DAX&q=${categoria}}&&limit=10`
    const resp = await fetch(url);

    const { data } = await resp.json();

    const gifs = data.map( img => ({

        id: img.id,
        titulo: img.title,
        url: img.images.downsized_medium.url

    }))

    console.log(gifs);
    return gifs;
}