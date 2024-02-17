import Card from "@/components/shared/Card";

const data = [
  {
    id: " 1",
    name: "Palio 2020",
    category: "Carros",
    preço: "R$ 20.000,00",
    tel: "(11) 99999-9999",
    description:
      "A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real.",
  },
  {
    id: " 2",
    name: "PC Gamer",
    category: "Eletrônicos",
    preço: "R$ 3.000,00",
    tel: "(11) 99999-9999",
    description:
      "A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real.",
  },
  {
    id: " 3",
    name: "Vestido",
    category: "Roupas e acessórios",
    preço: "R$ 20.000,00",
    tel: "(11) 99999-9999",
    description:
      "A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real.",
  },
];

export default function Home() {
  return (
    <div className="m-auto flex max-w-[1200px] flex-wrap justify-center gap-5 p-5">
      {data.map((item) => (
        <>
          <Card
            key={item.id}
            id={item.id}
            name={item.name}
            category={item.category}
            price={item.preço}
            tel={item.tel}
            description={item.description}
          />
          <Card
            key={item.id}
            id={item.id}
            name={item.name}
            category={item.category}
            price={item.preço}
            tel={item.tel}
            description={item.description}
          />
          <Card
            key={item.id}
            id={item.id}
            name={item.name}
            category={item.category}
            price={item.preço}
            tel={item.tel}
            description={item.description}
          />
        </>
      ))}
    </div>
  );
}
