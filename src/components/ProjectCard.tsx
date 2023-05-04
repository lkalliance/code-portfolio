import { useState } from "react";
import { TechList } from "../components";
import { styled } from "@mui/material/styles";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActionArea,
  Collapse,
  IconButton,
  Typography,
  Link,
} from "@mui/material/";
import { IconButtonProps } from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface cardProps {
  title: string;
  url: string;
  repo: string;
  shortDescription: string;
  description: string;
  image: string;
  techs: string[];
}

function ProjectCard({
  title,
  url,
  repo,
  shortDescription,
  description,
  image,
  techs,
}: cardProps) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 300 }} raised={true}>
      <CardActionArea component="a" href={url} target="_blank">
        <CardHeader title={title} />
        <CardMedia
          component="img"
          height="150"
          image={image}
          alt={shortDescription}
        />
      </CardActionArea>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {shortDescription}
          <br />
          <Link href={repo} rel="noreferrer" target="_blank" className="git">
            view code on GitHub
          </Link>
        </Typography>
      </CardContent>
      <ExpandMore
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </ExpandMore>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <TechList techs={techs} repo={repo} />

          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export { ProjectCard };
