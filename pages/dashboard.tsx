import { SliceZone } from "@prismicio/react";
import { components } from "../slices";
import type { InferGetStaticPropsType, GetStaticPropsContext } from "next";
import { createClient } from "../prismicio";
import { PrismicNextImage } from "@prismicio/next";
import { Page } from "../components/Page";
import {
  ChartLabel,
  HorizontalGridLines,
  LineSeries,
  VerticalGridLines,
  XAxis,
  XYPlot,
  YAxis,
} from "react-vis";
import { Bounded } from "../components/Bounded";
import { Heading } from "../components/Heading";

export const getStaticProps = async ({
  previewData,
}: GetStaticPropsContext) => {
  const client = createClient({ previewData });
  const articles = await client.getAllByType("article");

  const dataMap = articles.reduce((acc, article) => {
    const publicationDate = new Date(article.first_publication_date);
    const date = publicationDate.getDate();
    const month = publicationDate.getMonth();
    const year = publicationDate.getFullYear();
    const key = `${month}-${date}-${year}`;
    if (acc[key]) acc[key] += 1;
    else acc[key] = 1;
    return acc;
  }, {} as { [key: string]: number });
  const data =
    Object.keys(dataMap).map((key) => ({
      x: new Date(key).getTime(),
      y: dataMap[key],
    })) ?? [];

  return {
    props: {
      data,
    },
  };
};

type DashboardProps = InferGetStaticPropsType<typeof getStaticProps>;

const Dashboard: React.FC<DashboardProps> = ({ data }) => {
  const lastDataPoint = data.length > 0 ? data[data.length - 1] : undefined;
  const startDate = new Date("12-01-2022");
  const today = new Date();
  return (
    <Page>
      <Bounded>
        <Heading className="pb-8">Dashboard</Heading>

        <XYPlot
          xType="time"
          width={800}
          height={500}
          xDomain={[startDate, today]}
          yDomain={[0, 30]}
        >
          <HorizontalGridLines />
          <LineSeries
            color="red"
            data={[{ x: startDate.getTime(), y: 0 }, ...data]}
          />
          <LineSeries
            color="red"
            strokeStyle="dashed"
            data={
              lastDataPoint
                ? [lastDataPoint, { x: today.getTime(), y: lastDataPoint.y }]
                : [{ x: today.getTime(), y: 0 }]
            }
          />
          <YAxis title="Number of articles published" />
          <XAxis />
          <YAxis />
        </XYPlot>
      </Bounded>
    </Page>
  );
};

export default Dashboard;
