
const cats = [
    {id: 1, img: '/photos/photo.png', name: 'a'},
    {id: 2, img: '/photos/photo.png', name: 'b'},
    {id: 3, img: '/photos/photo.png', name: 'c'},
    {id: 4, img: '/photos/photo.png', name: 'd'},
    {id: 5, img: '/photos/photo.png', name: 'e'},
]

export default function catPhoto(){

    return (
        <ul style={{listStyleType: 'none'}}>
            {cats.map(cat => (
                <li key={cat.id} >
                    <figure>
                        <img src={cat.img} alt={cat.name} style={{ width: 200 }} />
                        <figcaption>{cat.name}</figcaption>
                    </figure>
                </li>
            ))}
        </ul>
    )
}