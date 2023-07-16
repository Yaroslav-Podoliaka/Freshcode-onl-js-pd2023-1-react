import React, { Component } from "react";
import { InfoArticle } from "../InfoArticle/InfoArticle";
import "./Main.css";

export class Main extends Component {
  state = {
      plot: "Джей, Хенли, Джек и Мерритт – иллюзионисты, которые однажды объединяются в одну команду. Они дают представления на самых больших и престижных сценах, шокируя публику своими навыками. Главной их изюминкой является фокус с ограблением банка, во время которого совершается реальное преступление, но сами иллюзионисты при этом не покидают сцену. За совершенное преступление на мастеров «иллюзии обмана» начинает охоту агент ФБР Дилан Роудс. Невероятный фокус был лишь отвлекающим маневром. Каким-то удивительным образом ребятам удается обвести вокруг пальца ФБР и Таддеуша Брэдли, самого известного разоблачителя фокусов.",
      actors: [
        "Джесси Айзенберг",
        "Марк Руффало",
        "Морган Фриман",
        "Айла Фишер",
        "Дейв Франко",
        "Вуди Харрельсон",
        "Мелани Лоран",
        "Майкл Кейн",
        "Майкл Келли",
      ],
      info: [
        "Страна: Франция, США",
        "Режисер: Луи Летерье",
        "Жанр: Триллеры, Криминал, Детективы",
        "Год выпуска: 2013",
      ],
  };
  render() {
    return (
      <main className="main">
        <div>
          <div className="container">
            <div>
              <img src="/Now-You-See-Me.jpg" alt="Иллюзия обмана" />
            </div>
            <div className="actors">
              <InfoArticle
                title="Актерский состав"
                content={this.state.actors.map((actor) => {
                  return <p key={actor}>{actor}</p>;
                })}
              />
            </div>
            <div className="info">
              <InfoArticle
                title="Общая информация"
                content={this.state.info.map((inf) => {
                  return <p key={inf}> {inf}</p>;
                })}
              />
            </div>
          </div>
        </div>
        <InfoArticle title="Сюжет" content={this.state.plot} />
      </main>
    );
  }
}

export default Main;
