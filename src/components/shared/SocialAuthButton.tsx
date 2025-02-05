import React, { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AnyObject } from "yup";
interface ISocialAuthButtonProps {
  className: string;
  title: string;
  brand: string;
  // style: any;
  logo: any;
  onClick: (type: string) => void;
  driver?: string;
}

const SocialAuthButton: FC<ISocialAuthButtonProps> = ({
  className,
  title,
  // style,
  logo,
  brand,
  // onClick,
  driver,
}) => {
  const [loginUrl, setLoginUrl] = useState(null);
  const [isLoginLoading, setIsLoginLoading] = useState<boolean>(false);
  useEffect(() => {
    if (driver) {
      setIsLoginLoading(true);
      fetch(`${import.meta.env.VITE_API_URL}socialauth/${driver}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Something went wrong!");
        })
        .then((data) => {
          setLoginUrl(data.url);
        })
        .catch((error) => console.error(error))
        .finally(() => setIsLoginLoading(false));
    } else {
      setLoginUrl(null);
    }
  }, []);
  const { t } = useTranslation();
  return (
    <>
      {loginUrl ? (
        <>
          <a
            className={`${className} btn text-blue-1`}
            href={loginUrl}
            style={{ borderRadius: "50px" }}
          >
            <img src={logo} alt={title} />
            <a className="inline-block">
              {t(title)}&nbsp;
              <span className="fw-600">{t(brand)}</span>
              {brand === "Apple" && <>&nbsp; &nbsp; &nbsp; &nbsp;</>}
              {brand === "Google" && <>&nbsp; &nbsp; &nbsp; </>}
              {brand === "Facebook" && <>&nbsp; </>}
            </a>
          </a>
        </>
      ) : (
        <>
          <button
            type="button"
            disabled={isLoginLoading}
            className={`${className} btn text-blue-1`}

            // onClick={() => onClick(title)}
          >
            <img src={logo} alt={title} />
            <a className="inline-block">
              {t(title)}&nbsp;
              <span className="fw-600">{t(brand)}</span>
              {brand === "Apple" && <>&nbsp; &nbsp; &nbsp; &nbsp;</>}
              {brand === "Google" && <>&nbsp; &nbsp; &nbsp; </>}
              {brand === "Facebook" && <>&nbsp; </>}
            </a>
          </button>
        </>
      )}
    </>
  );
};

export default SocialAuthButton;
