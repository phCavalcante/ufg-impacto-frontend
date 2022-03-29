
export default function Legend() {

    return (
        <div style={{backgroundColor: "#2D5672", color: "white"}} className="card">
            <p className="text-center text-uppercase fw-bold">LEGENDA</p>
            <ul>
                <li className="fw-bold">Pesquisa</li>
                <p>Projetos de pesquisa são projetos científicos de fins de acadêmicos (vice-versa) que abragem as intenções propostas pelo o(s) pesquisador(es) alem dos questionamentos levantados.</p>
                <li className="fw-bold">Ensino</li>
                <p>Projetos de ensino são projetos que apresentam uma proposta de atividade com o objetivo de melhorar a qualidade do processo de ensino e aprendizagem.</p>
                <li className="fw-bold">Extensão</li>
                <p>Projetos de extensão são projetos de caráter educativo, cultural e científico articulado ao ensino e à pesquisa, de forma indissociável, que viabilizam e relação transformadora entre Universidade e Sociedade.</p>
            </ul>
        </div>
    )
}