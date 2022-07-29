import React, { Fragment, useEffect, useState } from "react";

import "./cards.css";
import Card from "../card/card";

export interface Book {
  id: number;
  title: string;
  description: string;
  author: string;
  price: number;
  image: string;
  percentDiscount?: number;
  sku: string;
  isbn: string;
  editorial: string;
  anyo: number;
  pages?: number;
  language: string;
  weight?: number;
  width?: number;
  height?: number;
  age: string;
}

export const books = [
  {
    id: 1,
    title: "HABILIDADES BLANDAS A LA VENA",
    description:
      "En la actualidad, saber trabajar en equipo y funcionar correctamente en espacios colaborativos son habilidades indispensables para cualquier líder. Sin embargo, no se nos suele enseñar a regular nuestras emociones y hacerlas trabajar a nuestro favor. En Habilidades blandas a la vena, David Fischman, experto en liderazgo, recursos humanos y cultura empresarial, propone diferentes herramientas y estrategias para manejar nuestra inteligencia emocional en todos los espacios de la vida cotidiana, desde la oficina hasta el hogar. Con un lenguaje llano y didáctico, rico en humor, historias y anécdotas, y basándose en numerosos estudios científicos, este libro nos invita a la empatía, la paciencia y la serenidad con nosotros y con los demás, para, de este modo, entender «el caballo de nuestras emociones», y así encaminarnos hacia el éxito.",
    author: "DAVID FISCHMAN",
    price: 79.9,
    image:
      "https://iberoperu.vtexassets.com/arquivos/ids/261506-1200-1700?v=637903938035700000&width=1200&height=1700&aspect=true",
    sku: "381107",
    isbn: "9786123197537",
    editorial: "PLANETA",
    anyo: 2022,
    pages: 384,
    language: "Español",
    weight: 0.243,
    width: 15,
    height: 23,
    age: "ADULTOS",
  },
  {
    id: 2,
    title: "PANGEA",
    description:
      "Bienvenidos a Pangea, el nuevo mundo para la civilización que sobrevivió a la devastadora guerra nuclear. Aquí los humanos viven bajo los efectos de la mutaxio, una sustancia represora de emociones. Pero Aurelia Duma es, en secreto, una de las pocas personas inmunes a sus efectos. Junto a un puñado de jóvenes elegidos, Aurelia es enviada al Palatino, el centro del poder de Pangea, donde deberá llevar al límite sus habilidades, tanto físicas como intelectuales, para salir victoriosa en el famoso «Desafío». Sin embargo, intrigas y revueltas dentro del Palatino encaminarán a Aurelia hacia su verdadero destino.",
    author: "CLEMENCIA GRANADOS",
    price: 94.9,
    image:
      "https://iberoperu.vtexassets.com/arquivos/ids/267010-1200-1700?v=637940604084300000&width=1200&height=1700&aspect=true",
    sku: "383805",
    isbn: "9786124414114",
    editorial: "CROSSBOOKS",
    anyo: 2022,
    pages: 440,
    language: "Español",
    weight: 0.764,
    width: 15,
    height: 23,
    age: "JUVENIL",
  },
  {
    id: 3,
    title: "TAROT ANGÉLICO ASTRAL ZEFIRO",
    description:
      "En la actualidad, saber trabajar en equipo y funcionar correctamente en espacios colaborativos son habilidades indispensables para cualquier líder. Sin embargo, no se nos suele enseñar a regular nuestras emociones y hacerlas trabajar a nuestro favor. En Habilidades blandas a la vena, David Fischman, experto en liderazgo, recursos humanos y cultura empresarial, propone diferentes herramientas y estrategias para manejar nuestra inteligencia emocional en todos los espacios de la vida cotidiana, desde la oficina hasta el hogar. Con un lenguaje llano y didáctico, rico en humor, historias y anécdotas, y basándose en numerosos estudios científicos, este libro nos invita a la empatía, la paciencia y la serenidad con nosotros y con los demás, para, de este modo, entender «el caballo de nuestras emociones», y así encaminarnos hacia el éxito.",
    author: "ROSA MARÍA CIFUENTES",
    price: 169.9,
    image:
      "https://iberoperu.vtexassets.com/arquivos/ids/265860-1200-1700?v=637932547008230000&width=1200&height=1700&aspect=true",
    percentDiscount: 10,
    sku: "383947",
    isbn: "7756444000474",
    editorial: "DIANA",
    anyo: 2022,
    language: "Español",
    age: "ADULTOS",
  },
  {
    id: 4,
    title: "LOS HEREDEROS DE FUJIMORI",
    description:
      "El esperado libro sobre la vida política de los hijos de Alberto Fujimori por el autor de El último dictador El periodista José Alejandro Godoy vuelve con la exhaustiva investigación sobre el legado político de los hijos de Alberto Fujimori. Este es el libro definitivo que reúne los perfiles y los sucesos de una familia que cambió la historia de la política en el Perú. Esta edición completa, que sucede al bestseller El último dictador, narra los episodios mediáticos y políticos en donde participaron sus hijos, principalmente Keiko y Kenji Fujimori. Entre desastres naturales, presidencias truncas, sobornos millonarios, asilos, indultos y carcelerías de alto queda claro que este libro recupera la memoria de los últimos años. ",
    author: "JOSÉ ALEJANDRO GODOY",
    price: 103.2,
    image:
      "https://iberoperu.vtexassets.com/arquivos/ids/266979-1200-1700?v=637939546605030000&width=1200&height=1700&aspect=true",
    percentDiscount: 20,
    sku: "384562",
    isbn: "9786125068040",
    editorial: "DEBATE",
    anyo: 2022,
    pages: 720,
    language: "Español",
    weight: 0.7,
    width: 15,
    height: 23,
    age: "ADULTOS",
  },
  {
    id: 5,
    title: "SAPIENS",
    description:
      "A lo largo de los años, la evolución del mercado ha comprobado lo sabias que han sido las estrategias enseñadas por Graham. A la vez que conserva la integridad del texto original, esta edición revisada incluye comentarios actualizados del famoso periodista financiero Jason Zweig, cuya perspectiva incorpora las realidades del mercado presente, traza paralelismos entre los ejemplos de Graham y los titulares financieros actuales, y brinda a los lectores una comprensión más plena de cómo hacer para aplicar dichos principios. Fundamental e indispensable, El inversor inteligente es el libro más importante que usted leerá jamás sobre cómo alcanzar sus objetivos en lo financiero.",
    author: "HARARI. YUVAL NOAH",
    price: 92.8,
    image:
      "https://iberoperu.vtexassets.com/arquivos/ids/219817-1200-1700?v=637708798876130000&width=1200&height=1700&aspect=true",
    percentDiscount: 20,
    sku: "327346",
    isbn: "9780062316110",
    editorial: "HARPER PERENNIAL",
    anyo: 2018,
    pages: 464.0,
    language: "Inglés",
    weight: 0.975,
    width: 15,
    height: 23,
    age: "ADULTOS",
  },
  {
    id: 6,
    title: "BREVE HISTORIA GENERAL DEL PERÚ",
    description:
      "Breve historia general del Perú. Desde sus primeros pobladores hasta la debacle de su oligarquía ha sido pensado como un volumen de consulta obligatorio al momento de repasar nuestra historia y prehistoria.La ambición de Luis G. Lumbreras consiste no solo en dar cuenta de un periodo de cerca de siete mil años, sino también en hacerlo a través de una voz que, apelando a la oralidad, narra el devenir de un maravilloso país como el Perú y las múltiples naciones que lo habitan, así como los procesos que experimentó desde antes de ser una república bicentenaria.Además, se presenta con ilustraciones a todo color realizadas por Drescoud.",
    author: "LUIS GUILLERMO LUMBRERAS",
    price: 99.9,
    image:
      "https://iberoperu.vtexassets.com/arquivos/ids/267009-1200-1700?v=637940603179300000&width=1200&height=1700&aspect=true",
    sku: "383804",
    isbn: "9786125037091",
    editorial: "CRÍTICA",
    anyo: 2022,
    pages: 276,
    language: "Español",
    weight: 0.479,
    width: 15,
    height: 23,
    age: "ADULTOS",
  },
];

const Cards = () => {
  const [booksSeller, setBooksSeller] = useState<Array<Book>>([]);

  useEffect(() => {
    setBooksSeller(books);
  }, []);

  return (
    <Fragment>
      <main>
        <div className="secc">
          <div className="container">
            <h1>Los más destacados</h1>
            <Card booksSeller={books}></Card>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Cards;
