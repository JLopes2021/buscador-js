class App {
    //construindo a class
    constructor() {
        this.repositorios = []

        this.formulario = document.querySelector('form');

        this.lista = document.querySelector('.list-group');

        this.registrarEvento()
    }

    registrarEvento() {
        this.formulario.onsubmit = evento => this.adicionarRepositoro(evento);
    }
    adicionarRepositoro(evento) {
        //evitar recarregae=mento da pagina
        evento.preventDefault();

        //coloca o repo na lista
        this.repositorios.push({
            nome: 'Nerd Fonts',
            descricao: 'Iconi Font Aggregator Colection and patcher',
            avatar_url: 'https://avatars0.githubusercontent.com/u/8083459?v=4',
            link: 'https:/github.com/ryanoasis/nerd-fonts'
        });
        //
        this.renderizarTela();

    }

    //render
    renderizarTela() {
        this.lista.innerHTML = '';

        this.repositorios.forEach(repositorio => {
            let li = document.createElement('li');
            li.setAttribute('class', 'list-group-item list-group-item-action');

            let img = document.createElement('img');
            img.setAttribute('src', repositorio.avatar_url);
            li.appendChild(img);

            let strong = document.createElement('strong');
            let txtNome = document.createTextNode(repositorio.nome);
            strong.appendChild(txtNome);
            li.appendChild(strong);

            let p = document.createElement('p');
            let txtDescricao = document.createTextNode(repositorio.descricao);
            p.appendChild(txtDescricao);
            li.appendChild(p);

            let a = document.createElement('a');
            a.setAttribute('target', '_blank');
            a.setAttribute('href', repositorio.link);
            let txtA = document.createTextNode('Acessar');
            a.appendChild(txtA);
            li.appendChild(a);

            //Adição de Li como filho da UL

            this.lista.appendChild(li);

            this.formulario.querySelector('input[id=repositorio]').value = '';

            //input focus
            this.formulario.querySelector('input[id=repositorio]').focus();

        });
    }


}

new App();