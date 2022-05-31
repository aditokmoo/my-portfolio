import { useEffect, useState } from 'react'

function Work() {
    const [ repos, setRepos ] = useState([]);
    
    useEffect(() => {
        fetchRepos();
    }, [])

    const fetchRepos = async () => {
        const res = await fetch('https://api.github.com/users/aditokmoo/repos');
        const data = await res.json();

        setRepos(data)
    }

    return (
        <div className='section-wrapper'>
            <h1 id='heading'>My Work <span>( Latest repositorys )</span></h1>
            <div className="section">
                {repos.slice(0, 3).map((repo) => (
                    <div className="box" key={repo.id}>
                    <h2><i className='fab fa-github'></i> {repo.name}</h2>
                    <p>{repo.description}</p>
                    <a href={repo.html_url} rel="noreferrer" target="_blank">Visit</a>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Work