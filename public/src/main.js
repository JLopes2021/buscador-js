import api from './api';

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


    async adicionarRepositoro(evento) {
        //evitar recarregae=mento da pagina
        evento.preventDefault();

        //pegar o valor do input
        let input = this.formulario.querySelector('input[id=repositorio]').value;

        if (input.lenght === 0) {
            return;
        }
            let response = await api.get('/repos/${input}');
            let {name, description, html_url, owner:{avatar_url}} = response.data;

        //coloca o repo na lista
        this.repositorios.push({
            nome: name,
            descricao: description,
            avatar_url: avatar_url,
            link: html_url,
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
