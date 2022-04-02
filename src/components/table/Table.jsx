export default function Table(props) {
  return (
    <div className="table-responsive-sm">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Razão social</th>
            <th scope="col">CNPJ</th>
            <th scope="col">Número de empregados</th>
            <th scope="col">Capital social</th>
            <th scope="col">Segmento</th>
            <th scope="col">Egresso fundador</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>LG INFORMATICA S/A</td>
            <td>01.468.594/0001-22</td>
            <td></td>
            <td>69.584.878,06</td>
            <td>Tecnologia da Informação</td>
            <td>Adriana</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>FIBONACCI SOLUCOES EM TECNOLOGIA DA INFORMATICA LTDA</td>
            <td>08.150.325/0001-62</td>
            <td></td>
            <td>30.000,00</td>
            <td>Tecnologia da Informação</td>
            <td>Marcio Rogerio Rodrigues de Siqueira</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>ZERO GLOSA TECNOLOGIA LTDA</td>
            <td>14.488.144/0001-43</td>
            <td></td>
            <td>3.000.000,00</td>
            <td>Tecnologia da Informação</td>
            <td>Thiago Vaz Vieira</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>GEOMAIS SERVICOS DE INFORMATICA LTDA</td>
            <td>18.169.889/001-09</td>
            <td></td>
            <td>60.000,00</td>
            <td>Tecnologia da Informação</td>
            <td>Marcelo de Castro</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>GENESIS - ASSISTENCIA MATERNO INFANTIL LTDA</td>
            <td>26.678.193/0001-28</td>
            <td></td>
            <td>1.000,00</td>
            <td>Saúde</td>
            <td>Perdro Sebastião</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>LASER ASSOCIADOS DIAGNOSTICOS MEDICOS LTDA</td>
            <td>00.819.694/001-93</td>
            <td>200</td>
            <td>5.369.376,00</td>
            <td>Saúde</td>
            <td>Paulo Ricardo de Oliveira</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
