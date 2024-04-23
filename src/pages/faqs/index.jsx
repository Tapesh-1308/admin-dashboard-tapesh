import {Box, Typography, useTheme } from "@mui/material"
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const Faqs = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px" sx={{".css-1fqm6np-MuiPaper-root-MuiAccordion-root":{backgroundColor: colors.primary[400]}}}>
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">An Important Question</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt sit vel est provident, at praesentium ad nesciunt, accusamus quia, aspernatur aliquam ipsa veritatis officia nam?</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">Another Important Question</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt sit vel est provident, at praesentium ad nesciunt, accusamus quia, aspernatur aliquam ipsa veritatis officia nam?</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">Your Favourite Question</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt sit vel est provident, at praesentium ad nesciunt, accusamus quia, aspernatur aliquam ipsa veritatis officia nam?</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">Some Random Questions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt sit vel est provident, at praesentium ad nesciunt, accusamus quia, aspernatur aliquam ipsa veritatis officia nam?</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">And Final Question</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt sit vel est provident, at praesentium ad nesciunt, accusamus quia, aspernatur aliquam ipsa veritatis officia nam?</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default Faqs