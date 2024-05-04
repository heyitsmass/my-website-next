import { TLanguages, fetchColor } from "@/colors";
import { TSkill } from "@/me";
import ShieldIcon from "@mui/icons-material/Shield";
import { Box, Rating, Tooltip, Zoom } from "@mui/material";
import Image from "next/image";
import React, { useMemo } from "react";

const styles = {
  wrapper: "relative w-min",
  shield: "text-[10rem] drop-shadow-md",
  badge: "absolute text-black top-8 left-0 right-0 w-full text-center",
  img: "drop-shadow-lg",
};

const BadgeData = ({
  name,
  proficiency,
  startYear,
}: Omit<TSkill, "icon" | "description">) => {
  const currentYear = new Date().getFullYear();
  const years = currentYear - startYear;

  return <Box className="text-center">{name}</Box>;
};

const Badge = ({ ...props }: TSkill) => {
  const { name, icon, proficiency } = props;

  const color = useMemo(() => fetchColor(name as TLanguages), [name]);

  return (
    <Tooltip
      title={<BadgeData {...props} />}
      placement="bottom"
      TransitionComponent={Zoom}
      arrow
      slotProps={{
        popper: {
          modifiers: [
            {
              name: "offset",
              options: { offset: [0, -12] },
            },
          ],
        },
      }}
    >
      <Box className={styles.wrapper} component="div">
        <ShieldIcon
          className={styles.shield + ".skillBadge"}
          style={{
            stroke: color,
            strokeWidth: 0.4,
          }}
        />
        <Box className={styles.badge}>
          <Image
            src={icon}
            alt={name}
            width={70}
            height={70}
            className={styles.img}
          />
          <Box>
            <Rating
              value={proficiency}
              readOnly
              precision={0.5}
              size="small"
              max={4}
            />
          </Box>
        </Box>
      </Box>
    </Tooltip>
  );
};

const SkillBadge = React.memo(Badge);

export default SkillBadge;
