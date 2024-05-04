import { EducationBadgeProps } from "@/education";
import parseDate from "@/utils/parseDate";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";

const DegreeCard = React.memo(function EducationBadge({
  ...props
}: EducationBadgeProps) {
  const { kind, speciality, school, prefix, href, image, date, color } =
    props;

  const { start, end } = date;

  return (
    <Card
      elevation={1}
      className={`rounded-md flex w-min border-[${color}] border-solid`}
    >
      <CardHeader
        className="w-max"
        title={kind}
        subheader={speciality}
      />
      <CardContent className="flex flex-col">
        <CardMedia
          component="img"
          image={image}
          alt={school}
          sx={{
            maxHeight: 80,
            maxWidth: 80,
            alignSelf: "center",
          }}
          className="mb-8 shadow-md rounded-md"
        />
        <Divider />
        <Typography variant="body1" className="pt-4 min-w-max">
          {end ? "Graduated" : "In progress as of"}
          {" - "}
          {parseDate(end || start)}
        </Typography>
      </CardContent>
    </Card>
  );
});

export default DegreeCard;
