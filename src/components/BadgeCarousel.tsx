import { SkillGroup, TSkill } from "@/me";
import createWindow, { WindowArgs } from "@/utils/createWindow";
import { humanReadable } from "@/utils/lang";
import { Card, CardHeader, Grid } from "@mui/material";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import SkillBadge from "./SkillBadge";

const BadgeWindow = ({ segment }: { segment: TSkill[] }) => {
  return (
    <Grid container className="pb-10 gap-4 justify-center">
      {segment.map((skill) => (
        <BadgeDisplay {...skill} key={skill.name} />
      ))}
    </Grid>
  );
};

export const BadgeDisplay = ({ ...props }: TSkill) => {
  return (
    <Grid item className="flex justify-center">
      <SkillBadge {...props} />
    </Grid>
  );
};

const BadgesCardHeader = <T extends SkillGroup>({
  title,
  length,
  sortBy,
}: Pick<TBadgesCardProps<T>, "title" | "sortBy"> & {
  length: number;
}) => {
  return (
    <CardHeader
      title={title}
      subheader={`(${length}) Sorted by ${humanReadable(sortBy)}`}
      titleTypographyProps={{
        fontWeight: 700,
        textTransform: "capitalize",
      }}
      subheaderTypographyProps={{
        variant: "subtitle2",
        fontWeight: 300,
        fontStyle: "italic",
        minWidth: "max-content",
      }}
    />
  );
};

type TBadgesCardProps<T extends SkillGroup> = {
  title: string;
  pageLength?: number;
} & WindowArgs<T>;

const BadgeCarousel = <T extends SkillGroup>({
  title,
  pageLength = 3,
  ...props
}: TBadgesCardProps<T>) => {
  const { sortBy } = props;

  const { length } = props.data;

  const res = createWindow<T>({
    ...props,
    pageLength,
  });

  if (!(res instanceof Array)) {
    <Card className="pt-4 rounded-lg" elevation={2}>
      <BadgesCardHeader title={title} length={length} sortBy={sortBy} />
      <SkillBadge {...res} />
    </Card>;
  } else
    return (
      <Card className="pt-4 rounded-lg" elevation={2}>
        <BadgesCardHeader
          title={title}
          length={length}
          sortBy={sortBy}
        />
        <Carousel
          showThumbs={false}
          showStatus={false}
          autoPlay
          infiniteLoop
          swipeable
          centerSlidePercentage={50}
        >
          {res.map((segment, i) => (
            <BadgeWindow segment={segment} key={`badgeWindow-${i}`} />
          ))}
        </Carousel>
      </Card>
    );
};

export default React.memo(BadgeCarousel);
