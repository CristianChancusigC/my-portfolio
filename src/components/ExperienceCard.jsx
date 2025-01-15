import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { useTheme } from "../context/ThemeProvider ";
import { useTranslation } from "react-i18next";

const ExperienceCard = ({ experience }) => {
  const { isDarkMode } = useTheme();
  const bgColor = !isDarkMode ? "#0865a0" : "#1d1836";
  const txtColor = !isDarkMode ? "#21130d" : "#fff";
  const { t } = useTranslation("global");

  return (
    <VerticalTimelineElement
      contentStyle={{ background: bgColor, color: txtColor }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={t(experience.date)}
      iconStyle={{ background: experience.iconBg }}
      // icon={
      //   <div className="flex justify-center items-center w-full h-full">
      //     <img
      //       src={experience.icon}
      //       alt={experience.company_name}
      //       className="w-[60%] - h-[60%] object-contain"
      //     />
      //   </div>
      // }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">
          {t(experience.title)}
        </h3>
        <p className="text-[16px] font-semibold" style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experiece-point-${index}`}
            className="text-white text-[14px] pl-1 tracking-wider"
          >
            {t(point)}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
