export const DATA = [
  {
    id: 0,
    title: "Carpintería Básica",
    detail:
      "Aprende conceptos, técnicas y herramientas para trabajar la madera como un experto",
    ranking: 5,
    image: "carpinteria",
  },
  {
    id: 1,
    title: "Construccion en seco",
    detail:
      "Brindaremos conocimientos en construccion en seco para interiores incluyendo técnicas",
    ranking: 5,
    image: "construccion",
  },
  {
    id: 2,
    title: "Torneria",
    detail:
      "Una gran oportunidad para todas aquellas personas que quieran usar el",
    ranking: 3,
    image: "torneria",
  },
  {
    id: 3,
    title: "Barbería Masculina",
    detail:
      "En éste curso aprenderás el arte cortar el cabello y la barba con técnicas actualizadas",
    ranking: 4,
    image: "barberia",
  },
  {
    id: 5,
    title: "Soldadura Básica",
    detail:
      "Aprenderás de una forma totalmente práctica los secretos de las soldaduras eléctricas",
    ranking: 4,
    image: "soldadura",
  },
];

export const CURSOS = [
  {
    type: "reciclado",
    id: 0,
    title: "Reciclado y clasificación de residuos",
    detailCard: "En este curso vas a encontrar material para aprender a reciclar, su importancia para el medio ambiente...",
    presentation: {
      item: false,
      text: "En este curso vas a encontrar material para aprender a reciclar, su importancia para el medio ambiente, tipos de residuos, el proceso de reciclaje, el ciclo de los diferentes materiales y campañas de comunicación que acompañan a concientizar a la sociedad",
    },
    presentation2: {
      item: false,
      text: "Sabrás al finalizar sobre la importancia para el medio ambiente y podrás pensar en llevar este conocimiento a un emprendimiento productivo que permita mejorar el medio ambiente y te de herramientas en tu vida cotidiana!",
    },
    presentation3: {
      item: false,
      text: "¡A empezar el recorrido!",
    },
    image: require("../../assets/images/cursos/reciclado.jpg"),
    curso: {
      level1: {
        clase1: {
          images: null,
          videos: {
            video1: "https://www.youtube.com/watch?v=ZEgLWrMJd2M",
          },
          textClass: {
            p1: {
              item: false,
              title: false,
              text: "La creciente población mundial está ocasionando impactos negativos en el planeta. El modelo actual de producción y consumo genera muchos residuos que, en muchos casos, no vuelven a ser reutilizados o reciclados. Por ejemplo, en Europa cada ciudadano genera un promedio de 1,69 kilos de basura al día, es decir, más de 620 kilos de basura al año. El 60 % del volumen de basura generada lo constituyen envases y embalajes, que muchas veces están diseñados para un solo uso.",
            },
            p2: {
              item: false,
              title: false,
              text: "Hasta hace pocos años, la gestión de los residuos se ha centrado principalmente en enviarlos a vertederos para su almacenamiento o a plantas incineradoras. Esta solución no es sostenible por diversos motivos:",
            },
            p3: {
              item: true,
              title: false,
              text: "Plantea serios riesgos para el medioambiente, los seres vivos y la salud de las personas."
            },
            p4: {
              item: true,
              title: false,
              text: "No reduce el consumo de recursos (materias primas y de energía).",
            },
            p5: {
              item: true,
              title: false,
              text: "No actúa sobre la causa (el modelo de consumo), sino solo sobre la consecuencia (la gestión de residuos).",
            },
            p6: {
              item: false,
              title: true,
              text: "Modelo de producción lineal vs. circular",
            },
            p7: {
              item: false,
              title: false,
              text: "Hasta hace poco el modelo de producción y consumo tenía principalmente forma lineal. Es decir, una secuencia de etapas como la extracción de recursos, la producción, el consumo y el desecho de residuos. Este modelo es altamente ineficiente y no es sostenible en el tiempo. Vivimos en un planeta finito en el que los insumos (combustibles, materiales) son limitados para la demanda de una población creciente. Además, tanto los procesos productivos como los residuos generados tienen muchas veces un alto impacto en el medio ambiente y los seres vivos.",
            },
            p8: {
              item: false,
              title: false,
              text: "La forma de combatir estos efectos es cambiar nuestro modelo de producción y de consumo pasando de un modelo de economía lineal a un modelo de economía circular, que es aquella que emula a la naturaleza al convertir los residuos en recursos. Este tipo de economía fomenta desde su primera etapa la reducción del consumo teniendo en cuenta su vida útil y su reutilización o reciclaje al término de esta.",
            },
            p9: {
              item: false,
              title: false,
              text: "Para implementar el modelo de economía circular es necesario cambiar la mentalidad de empresas y consumidores. Por un lado, las empresas deben adoptar el diseño de productos según los principios de economía circular, utilizando los residuos como materias primas y reduciendo los productos no reutilizables.",
            },
            p10: {
              item: false,
              title: false,
              text: "El modelo de producción de la economía circular aboga por utilizar la mayor parte de materiales biodegradables posibles en la fabricación de bienes de consumo -nutrientes biológicos- para que estos puedan volver a la naturaleza sin causar daños medioambientales al agotar su vida útil. En los casos que no sea posible utilizar materiales eco-friendly -nutrientes técnicos: componentes electrónicos, metálicos, baterías…- el objetivo será facilitar un desacople sencillo para darle una nueva vida reincorporándolos al ciclo de producción y componer una nueva pieza. Cuando no sea posible, se reciclará de una manera respetuosa con el medio ambiente.",
            },
          },
        },
        clase2: {
          images: null,
          videos: {
            video1: "https://www.youtube.com/watch?v=gxzLhPteufw",
          },
          textClass: {
            p1: {
              item: false,
              title: true,
              text: "Los consumidores y la regla de las 3 Rs",
            },
            p2: {
              item: false,
              title: false,
              text: "En cuanto al papel de los consumidores, también es clave su responsabilidad a la hora de actuar. Éstos deben utilizar los productos de manera responsable poniendo en práctica la regla de las 3 Rs: reducir, reutilizar y reciclar.",
            },
            p3: {
              item: false,
              title: false,
              text: "Reducir implica prevenir la formación de residuos, modificando los modelos de producción y nuestros hábitos de consumo y adquiriendo productos responsablemente.",
            },
            p4: {
              item: false,
              title: false,
              text: "Reutilizar significa volver a usar un producto para la misma función (reparándolo) o para otros usos alternativos, alargando así su vida útil.",
            },
            p5: {
              item: false,
              title: false,
              text: "Reciclar, que permite aprovechar los distintos materiales de los residuos e introducirlos en los ciclos de producción como materias primas.",
            },
            p6: {
              item: false,
              title: false,
              text: "La regla de las 3 Rs es una regla jerárquica, es decir, las acciones están ordenadas según la prioridad que debemos darles:",
            },
            p7: {
              item: true,
              title: false,
              text: "En primer lugar, reducir el consumo de recursos naturales, productos, etc.",
            },
            p8: {
              item: true,
              title: false,
              text: "A continuación, reutilizar los productos",
            },
            p9: {
              item: true,
              title: false,
              text: "En último lugar, solo cuando no son posibles las dos acciones anteriores, reciclar",
            },
            p10: {
              item: false,
              title: false,
              text: "Pero ¿Cómo podemos hacerlo? Aquí tienes algunas ideas para poner en práctica las 3 Rs como consumidores. Para reducir nuestro consumo podemos:",
            },
            p11: {
              item: true,
              title: false,
              text: "Limitar la compra de productos de usar y tirar o que tengan embalaje voluminoso.",
            },
            p12: {
              item: true,
              title: false,
              text: "Reducir la utilización de bolsas de plástico en las compras.",
            },
            p13: {
              item: true,
              title: false,
              text: "Usar los electrodomésticos de manera eficiente",
            },
            p14: {
              item: true,
              title: false,
              text: "Acceder a productos que necesitamos a través de la economía colaborativa",
            },
            p15: {
              item: true,
              title: false,
              text: "aprovechar los servicios públicos ofrecidos por los ayuntamientos",
            },
            p16: {
              item: false,
              title: false,
              text: "La reutilización de productos se consigue principalmente:",
            },
            p17: {
              item: true,
              title: false,
              text: "Favoreciendo la reparación de aparatos electrónicos en lugar de la compra de productos nuevos",
            },
            p18: {
              item: true,
              title: false,
              text: "Poniendo en marcha nuestra creatividad para darle una nueva vida a los objetos que ya han sido utilizados.",
            },
            p19: {
              item: false,
              title: false,
              text: "Y por último para reciclar debemos separar correctamente los diferentes residuos y tirarlos al contenedor adecuado o llevarlos al punto limpio. Utilizar la regla de las 3 R’s trae muchos beneficios para la sociedad y para el planeta. En nuestra mano está cambiar nuestro modelo de producción y de consumo y ayudar a crear un desarrollo sostenible y un futuro mejor para todos.",
            },
          },
        },
        clase3: {
          images: null,
          videos: null,
          textClass: {
            p1: {
              item: false,
              title: true,
              text: "¿Qué es un residuo?",
            },
            p2: {
              item: false,
              title: false,
              text: "Un residuo, según la ley de cualquier país, hace referencia a cualquier material que es considerado desecho y que es necesario eliminar. Esta eliminación tiene como objetivo evitar problemas sanitarios o medioambientales, entre otros. Pero este concepto, con el paso del tiempo y la conciencia de preservar nuestro planeta, se ha ampliado abarcando otros fines. Todo debido a la escasez y agotamiento de materias primas, se ha generado la necesidad de reutilizar estos residuos, aprovechando al máximo sus propiedades."
            },
            p3: {
              item: false,
              title: true,
              text: "Objetivos en el Reciclaje de Residuos",
            },
            p4: {
              item: false,
              title: false,
              text: "Antes de abarcar la clasificación más general, es interesante saber que cuando queremos reciclar hay dos tipos de objetivos:",
            },
            p5: {
              item: true,
              title: false,
              text: "Prevención: Es el proceso preventivo mediante el cual, antes de que un material se convierta en residuo, se elimine el mayor número de sustancias peligrosas, evitando un impacto mayor al medio ambiente.",
            },
            p6: {
              item: true,
              title: false,
              text: "Aporte de valor: Es el proceso que tiene como objetivo que los residuos sean reutilizados, reciclados o utilizados para, por ejemplo, conseguir energía (Industria Energética…).",
            },
            p7: {
              item: false,
              title: true,
              text: "Clasificación de los Residuos",
            },
            p8: {
              item: false,
              text: false,
              text: "A continuación, nos centraremos en cuáles son los diferentes tipos de residuos y las características de los mismos, siempre definiéndolos desde el punto de vista de la sostenibilidad. A continuación, se exponen cuáles son los tipos de desechos en cuanto a su peligrosidad, su origen y su composición:",
            },
            p9: {
              item: false,
              title: true,
              text: "Tipos de residuos Según su peligrosidad:",
            },
            p10: {
              item: true,
              title: false,
              text: "Inertes: son aquellos que una vez depositados en el vertedero no sufren transformaciones físico, químicas o biológicas significativas.",
            },
            p11: {
              item: true,
              title: false,
              text: "Peligrosos: los que por sus características suponen un peligro para el medio ambiente y los seres vivos. Todos estos residuos están recogidos en una lista publicada en el RD 952/1997 y se refiere a la mayoría de aceites, disolventes y envases que hayan contenido sustancias peligrosas.",
            },
            p12: {
              item: true,
              title: false,
              text: "No peligrosos: los que no se encuadran ni en el grupo de residuos inertes, ni peligrosos. Todos ellos son el plástico, el papel o el metal, y todos aquellos que no hayan sido contaminados con ninguna sustancia peligrosa.",
            },
            p13: {
              item: false,
              title: true,
              text: "Tipos de residuos Según su origen:",
            },
            p15: {
              item: true,
              title: false,
              text: "Residuos domésticos: aquellos que han sido generados en los hogares por actividades domésticas.",
            },
            p16: {
              item: true,
              title: false,
              text: "Residuos comerciales: producidos por la actividad propia de los comercios y servicios de restauración, así como de las oficinas y mercados y todos aquellos actores del sector servicios.",
            },
            p17: {
              item: true,
              title: false,
              text: "Residuos Industriales: los que resultan de los procesos de producción, transformación, consumo o mantenimiento generados en la actividad industrial.",
            },
            p18: {
              item: true,
              title: false,
              text: "Biorresiduos: los denominados biodegradables, provenientes de jardines y parques y los residuos alimenticios de hostelería, hogares y plantas de producción relacionadas con el sector alimentario.",
            },
            p19: {
              item: true,
              title: false,
              text: "Escombros y residuos de construcción: los que se generan en una obra de construcción, sin incluir las tierras extraídas de los procesos de excavación.",
            },
            p20: {
              item: true,
              title: false,
              text: "Residuos sanitarios: aquellos generados en centros sanitarios, resultado del trabajo realizado en laboratorios y centros médicos relacionados con la investigación, y que deben ser desechados de manera especial con el fin de no generar ninguna enfermedad.",
            },
            p21: {
              item: true,
              title: false,
              text: "Residuos mineros: para referirnos a los residuos sólidos o en pasta que se generan tras el aprovechamiento de un recurso geológico.",
            },
            p22: {
              item: true,
              title: false,
              text: "Residuos radiactivos: aquellos que contienen elementos químicos sin ningún propósito práctico.",
            },
            p23: {
              item: true,
              title: false,
              text: "Subproductos animales: también conocidos como SANDACH (Subproductos Animales No Destinados Al Consumo Humano) para denominar a los cuerpos enteros o partes de animales o productos de origen animal que, por motivos sanitarios o por decisión del operados, no pueden ser consumidos.",
            },
            p24: {
              item: true,
              title: false,
              text: "Residuos Sólidos Urbanos: son un grupo muy amplio en el que participamos todos y, por esta razón, las campañas de reciclaje suelen centrarse en este tipo de residuos y van orientadas en muchos casos a particulares. Saber qué son los residuos sólidos y su clasificación, mejorará positivamente su tratamiento.",
            },
            p25: {
              item: true,
              title: false,
              text: "El concepto de Residuos Sólidos Urbanos (RSU) hace referencia a los desechos generados en domicilios particulares, en comercios, oficinas o en otros establecimientos similares. Podemos también considerar sólidos urbanos a los provenientes de las vías públicas y otras zonas públicas. Este grupo está formado por diferentes tipos de basura: vidrio, papel y cartón, restos orgánicos, plásticos, textiles, metales, madera y escombros.",
            },
          }
        },
      },
      level2: {
        clase1: {
          images: {
            image1: "reciclado",
          },
          videos: {
            video1: "https://www.youtube.com/watch?v=YiHTNfKJwAw",
          },
          textClass: {
            p1: {
              item: false,
              title: true,
              text: "Tipos de contenedores",
            },
            p2: {
              item: false,
              title: false,
              text: "Para la separación en origen doméstico2​ se usan contenedores de distintos colores ubicados en entornos urbanos o rurales:",
            },
            p3: {
              item: true,
              title: false,
              text: "Contenedor amarillo (envases): En este se deben depositar todo tipo de envases ligeros como los envases de plásticos (botellas, tarrinas, bolsas, bandejas, etc.), de latas (bebidas, conservas, etc.) En general, deben depositarse todos aquellos envases comercializados en el mercado nacional e identificados por el símbolo del punto verde."
            },
            p4: {
              item: true,
              title: false,
              text: "Contenedor azul (papel y cartón): En este contenedor se deben depositar los envases de cartón (cajas, bandejas, etc.), así como los periódicos, revistas, papeles de envolver, propaganda, etc. Es aconsejable plegar las cajas de manera que ocupen el mínimo espacio dentro del contenedor y también retirar las grapas, los canutillos y los plásticos que vengan incorporados en el papel y cartón. Si están manchados de residuos orgánicos, como por ejemplo las servilletas de papel, no deben ir en este contenedor.",
            },
            p5: {
              item: true,
              title: false,
              text: "Contenedor verde (vidrio): En este contenedor se depositan envases de vidrio. Pero se debe tener en cuenta que no se puede depositar bombillas, frascos de medicamentos, gafas, jarrones y tazas, loza, lunas de automóviles, porcelana o cerámica, tapones, chapas o tapas de los propios tarros o botellas de vidrio, tubos y fluorescentes.",
            },
            p6: {
              item: true,
              title: false,
              text: "Contenedor marrón (orgánico):5​ En él se depositan el resto de residuos que no tienen cabida en los grupos anteriores, fundamentalmente desechos orgánicos catalogados como materia biodegradable.",
            },
            p7: {
              item: true,
              title: false,
              text: "Contenedor rojo o puntos limpios (desechos peligrosos): Como teléfonos móviles, insecticidas, pilas o baterías, aceite comestible o aceite de vehículos, jeringas, latas de aerosol, etc.",
            },
          },
        },
        clase2: {
          images: {
            image1: "arbolreciclado",
          },
          videos: null,
          textClass: {
            p1: {
              item: false,
              title: true,
              text: "Campaña de reciclado",
            },
            p2: {
              item: false,
              title: false,
              text: "Todos podemos organizar una campaña de reciclaje en nuestra ciudad, ya que es bastante común que no haya programas de separación, recolección y reciclaje de todos los residuos que se generan ella.",
            },
            p3: {
              item: true,
              title: false,
              text: "Por eso desde la escuela, una ONG, un club, empresas y otras instituciones se pueden organizar campañas de reciclaje que promuevan el reciclado de toda clase de residuos. Las campañas de reciclaje tienen un tiempo de comienzo y fin establecidos, si no se convierten en programas. Hay una fecha de comienzo y otra de finalización.",
            },
            p4: {
              item: true,
              title: false,
              text: "Se debe realizar una buena comunicación en la zona donde se planea realizar la campaña, hay que utilizar todo tipo de medios como afiches, publicidad, redes sociales, puerta a puerta, entre otros.",
            },
            p5: {
              item: true,
              title: false,
              text: "Dar información clara a la hora de difundir la campaña para que todos entiendan el mensaje y como se realizara la misma.",
            },
            p6: {
              item: true,
              title: false,
              text: "Antes de empezar la campaña se tiene que gestionar que se hará con los residuos o materiales que se recolecten.",
            },
            p7: {
              item: true,
              title: false,
              text: "Involucrar a todos los sectores sociales y comunitarios para que sea realmente exitosa.",
            },
            p8: {
              item: true,
              title: false,
              text: "Dar opciones y formas de participación a los ciudadanos para que puedan colaborar más cantidad de personas.",
            },
            p9: {
              item: true,
              title: false,
              text: "Cuando se concluye la campaña se debe informar los resultados en diferentes medio para que los que participaron sepan como termino y lo que se logro.",
            },
            p10: {
              item: true,
              title: false,
              text: "Las campañas de reciclaje puede repetirse pero es conveniente ser creativo y comunicar en forma distinta.",
            },
            p11: {
              item: false,
              title: false,
              text: "Una campaña de reciclaje pueden ser locales, regionales e incluso nacionales. Pueden centrarse en gran cantidad de productos o materiales que son residuos pero que no deben ser desechados ya que generarían contaminación además de desaprovechar recursos.",
            },
            p12: {
              item: false,
              title: false,
              text: "El reciclaje debe convertirse en la principal forma de gestionar los residuos, en toda ciudad, pueblo y países debe promocionarse el reciclaje. De esta forma se estará protegiendo el medio ambiente.",
            },
            p13: {
              item: false,
              title: false,
              text: "Una buena campaña de reciclaje debe concientizar e informar sobre la necesidad del reciclaje y dar información de cómo hacerlo.",
            },
            p14: {
              item: false,
              title: false,
              text: "¿Has organizado alguna vez una campaña de reciclaje? ¿Qué pasos a seguido para organizarla?",
            },
            p15: {
              item: false,
              title: false,
              text: "A continuación te dejamos algunos ejemplos de campañas en el mundo",
            },
          },
        },
        clase3: {
          image: {
            image1: "table",
            image2: "cicloPlastico",
            image3: "cicloPapel",
          },
          video: {
            video1: "https://www.youtube.com/watch?v=C1M8WdkqXMA",
            video2: "https://www.youtube.com/watch?v=DFp61svGlBE",
            video3: "https://www.youtube.com/watch?v=6kRtsPABg4A",
          },
          textClass: {
            p1: {
              item: false,
              title: true,
              text: "Diferentes ciclos de reciclado",
            },
            p2: {
              item: false,
              title: false,
              text: "A modo de ejemplo veamos el ciclo de reciclado del plástico."
            },
            p3: {
              item: false,
              title: false,
              text: "Ahora mira cómo es el ciclo del plástico y una pequeña gráfica ilustrativa, donde se puede observar la primera aplicación y el uso después del reciclado.",
            },
            p4: {
              item: false,
              title: false,
              text: "Recomendación: Limpia los envases y aplástalos para reducir su volumen antes de tirarlos al contenedor. Fuente: https://www.renovablesverdes.com/contenedores-reciclaje/?utm_source=destacado-inside",
            },
          },
        },
        clase4: {},
      }
    },
  },
];
