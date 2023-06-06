class App {
    //construindo a class
    constructor(){
        this.repositorios = []

        this.formulario = document.querySelector('form');

        this.registrarEvento()
    }

    registrarEvento(){
        this.formulario.onsubmit = evento => this.adicionarRepositoro(evento);
    }
    adicionarRepositoro(evento){
        //evitar recarregae=mento da pagina
        evento.preventDefault();

        //coloca o repo na lista
        this.repositorios.push({
            nome: 'Nerd Fonts',
            descricao: 'Iconi Font Aggregator Colection and patcher',
            avatar_url: 'https://avatars0.githubusercontent.com/u/8083459?v=4',
            link: 'https:/github.com/ryanoasis/nerd-fonts'
        });
        console.log(this.repositorios);
    }

    //render



}

new App();