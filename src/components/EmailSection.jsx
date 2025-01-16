import { Link } from "react-router";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

function EmailSection() {
  const gitIcon = "./images/github-icon.svg";
  const linkedInIcon = "./images/linkedIn-icon.svg";
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation("global");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userId = import.meta.env.VITE_EMAILJS_USER_ID;

    // console.log(serviceId, templateId, userId);

    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        serviceId,
        templateId,
        // "service_uwgjbep",
        // "template_rnai3tn",
        {
          from_name: form.name,
          to_name: "Cristian",
          from_email: form.email,
          to_email: "cristianchancusigc@gmail.com",
          message: form.message,
        },
        userId
        // "AoEPAcVu2W7F6XX__"
      )
      .then(
        () => {
          setLoading(false);
          alert(`${t("Contact.messageOk")}`);
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert(`${t("Contact.messageError")}`);
        }
      );
  };

  return (
    <section
      className={`${styles.paddingX} grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4`}
    >
      <div>
        <h5 className="text-xl font-bold text-text-title-light dark:text-text-title-dark my-2">
          {t("Contact.txt1")}
        </h5>
        <p className="text-text-description-light dark:text-text-description-dark mb-4 mas-w-md">
          {t("Contact.txt2")}
        </p>
        <div className="social flex flex-row gap-2">
          <Link to="https://github.com/CristianChancusigC" target="_blank">
            <img
              src={gitIcon}
              alt="GitHub Icon"
              className="bg-icon-bg-light dark:bg-transparent rounded-xl"
            />
          </Link>
          <Link
            to="https://www.linkedin.com/in/cristian-chancusig-153520247/"
            target="_blank"
          >
            <img
              src={linkedInIcon}
              alt="LinkInd Icon"
              className="bg-icon-bg-light dark:bg-transparent rounded-xl"
            />
          </Link>
        </div>
      </div>
      <div>
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col">
          <div className="mb-6">
            <label className="block text-sm mb-2 font-medium text-text-title-light dark:text-text-title-dark">
              {t("Contact.formTxt.first")}
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder={t("Contact.formTxt.firstPlaceholder")}
                className="bg-[#ebe5e5] border border-[#9e9b9b] placeholder:-[#9CA2A9] text-gray-600 text-sm rounded-lg block w-full p-2.5
                dark:bg-[#18191E] dark:border-[#33353F] dark:text-gray-100"
              />
            </label>
          </div>
          <div className="mb-6">
            <label className="block text-sm mb-2 font-medium text-text-title-light dark:text-text-title-dark">
              {t("Contact.formTxt.second")}
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder={t("Contact.formTxt.secondPlaceholder")}
                className="bg-[#ebe5e5] border border-[#9e9b9b] placeholder:-[#9CA2A9] text-gray-600 text-sm rounded-lg block w-full p-2.5
                dark:bg-[#18191E] dark:border-[#33353F] dark:text-gray-100"
              />
            </label>
          </div>
          <div className="mb-6">
            <label className="block text-sm mb-2 font-medium text-text-title-light dark:text-text-title-dark">
              {t("Contact.formTxt.third")}
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="bg-[#ebe5e5] border border-[#9e9b9b] placeholder-[#9CA2A9] text-gray-600 text-sm rounded-lg block w-full p-2.5
                dark:bg-[#18191E] dark:border-[#33353F] dark:text-gray-100"
                placeholder={t("Contact.formTxt.thirdPlaceholder")}
              ></textarea>
            </label>
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            {loading
              ? `${t("Contact.formTxt.sendingBtn")}`
              : `${t("Contact.formTxt.sendBtn")}`}
            {/* {loading ? "Sending..." : "Send"} */}
          </button>
        </form>
      </div>
    </section>
  );
}

export default SectionWrapper(EmailSection, "contact");
