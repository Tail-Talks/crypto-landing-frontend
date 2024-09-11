import React from "react"
import imageMainDogs from "../../assets/mainDogs.png"
import imageMainLera from "../../assets/mainLera.png"

const Main: React.FC = () => {
  return (
    <div className="mb-[230px] flex w-full justify-between">
      <div className="flex w-[672px] flex-col items-start justify-center">
        <h1 className="mb-[36px] text-[72px] font-bold leading-[82px] tracking-[-2px] text-white">
          Протяните руку вашему питомцу с&nbsp;NFT
        </h1>
        <p className="mb-[36px] w-[637px] text-[20px] leading-[36px] tracking-[0.5px] text-[#E2E2E2]">
          Tail Talks&nbsp;&mdash; социальная сеть нового поколения для питомцев
          и&nbsp;их&nbsp;владельцев, где каждый питомец заслуживает стать
          звездой
        </p>
        <button className="h-[60px] w-[407px] rounded-[25px] bg-[#9B51E0] bg-gradient-to-r from-[#9B51E0] to-[#3081ED] text-[22px] font-semibold leading-[36px] text-white transition-all duration-300 hover:opacity-75">
          Узнать подробнее
        </button>
      </div>
      <div className="border-gradient flex h-[525px] w-[505px] items-center justify-center rounded-[20px]">
        <div className="relative flex flex-col items-center justify-center size-full">
          <div className="image-container mb-[15px]">
            <img
              src={imageMainDogs}
              alt="Ваш питомец"
              className="rounded-[20px]"
            />
            <div className="highlight-circle highlight-circle-pink absolute left-[-45px] top-[-60px]"></div>
            <div className="highlight-circle highlight-circle-blue absolute bottom-[-90px] right-[-45px]"></div>
          </div>
          <div className="flex size-full h-[50px] items-center justify-between">
            <button className="z-10 flex items-center justify-center rounded bg-transparent text-[16px] font-semibold leading-[24px] text-white transition duration-300 hover:opacity-75">
              <img
                src={imageMainLera}
                alt="Аватар Леры"
                className="mr-[15px]"
              />
              ЛЕРА
            </button>
            <button className="z-10 flex items-center justify-center rounded bg-transparent text-[16px] leading-[24px] text-white transition duration-300 hover:opacity-75">
              <svg
                width="22"
                height="17"
                viewBox="0 0 22 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-[8px]"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.73649 1.35179C3.65746 1.35179 1.5 3.03877 1.5 5.40098C1.5 8.18868 3.8236 10.7481 6.36118 12.6862C7.60701 13.6378 8.85656 14.4031 9.79645 14.931C10.2656 15.1946 10.6557 15.3979 10.9269 15.5346C10.9523 15.5474 10.9767 15.5596 11 15.5712C11.0233 15.5596 11.0477 15.5474 11.0731 15.5346C11.3443 15.3979 11.7344 15.1946 12.2035 14.931C13.1434 14.4031 14.393 13.6378 15.6388 12.6862C18.1764 10.7481 20.5 8.18868 20.5 5.40098C20.5 3.03877 18.3425 1.35179 16.2635 1.35179C14.1581 1.35179 12.4627 2.59789 11.7115 4.61964C11.6094 4.89439 11.3228 5.07971 11 5.07971C10.6772 5.07971 10.3906 4.89439 10.2885 4.61964C9.53729 2.59789 7.84185 1.35179 5.73649 1.35179ZM11 16.3362L11.3426 16.9348C11.1276 17.0338 10.8725 17.0338 10.6574 16.9348L11 16.3362ZM0 5.40098C0 2.29557 2.82903 0.00610352 5.73649 0.00610352C8.02981 0.00610352 9.88078 1.10617 11 2.79152C12.1192 1.10617 13.9702 0.00610352 16.2635 0.00610352C19.171 0.00610352 22 2.29557 22 5.40098C22 8.82649 19.1986 11.7347 16.6112 13.7109C15.2945 14.7165 13.9816 15.52 12.9996 16.0716C12.5078 16.3478 12.0971 16.562 11.8078 16.7078C11.6631 16.7807 11.5486 16.8366 11.4694 16.8747C11.4299 16.8937 11.3991 16.9083 11.3777 16.9184L11.3529 16.93L11.3459 16.9333L11.3438 16.9342C11.3435 16.9343 11.3426 16.9348 11 16.3362C10.6574 16.9348 10.6576 16.9349 10.6574 16.9348L10.6541 16.9333L10.6471 16.93L10.6223 16.9184C10.6009 16.9083 10.5701 16.8937 10.5306 16.8747C10.4514 16.8366 10.3369 16.7807 10.1922 16.7078C9.90294 16.562 9.4922 16.3478 9.00042 16.0716C8.01844 15.52 6.70549 14.7165 5.38882 13.7109C2.80141 11.7347 0 8.82649 0 5.40098Z"
                  fill="url(#paint0_linear_864_398)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_864_398"
                    x1="0.458334"
                    y1="2.58691"
                    x2="22.8104"
                    y2="4.35923"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#9B51E0" />
                    <stop offset="1" stopColor="#3081ED" />
                  </linearGradient>
                </defs>
              </svg>
              338
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main