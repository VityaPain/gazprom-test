import React, {useRef} from "react";


const dataWayFrontEnd = [
    {
      id: 1,
      title: "Добро пожаловать!",
      catogories: ["Для новичка", "Основы работы"],
      description: "Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете",
      status: {
        name: "Завершено",
        allTask: 10,
        makeTast: 10
      }
    },
    {
      id: 2,
      title: "Начало работы",
      catogories: ["Для новичка", "Основы работы"],
      description: "Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете",
      status: {
        name: "Начато",
        allTask: 10,
        makeTast: 8
      }
    },
    {
      id: 3,
      title: "Введение в рабочую среду",
      catogories: ["Для новичка", "Основы работы"],
      description: "Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете",
      status: {
        name: "Неначато",
        allTask: 10,
        makeTast: 0
      }
    }
]
const dataCatalogThemes = [
    {
      id: 1,
      title: "Начало работы",
      catogories: ["Для новичка", "Основы работы"],
      description: "Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете",
      status: {
        name: "Начато",
        allTask: 10,
        makeTast: 8
      }
    },
    {
      id: 2,
      title: "Работа с библиотеками GPN",
      catogories: ["Профессионалу", "Библиотеки"],
      description: "Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете",
      status: {
        name: "Неначато",
        allTask: 255,
        makeTast: 0
      }
    },
    {
      id: 3,
      title: "Введение в рабочую среду",
      catogories: ["Профессионалу", "Библиотеки"],
      description: "Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете",
      status: {
        name: "Неначато",
        allTask: 10,
        makeTast: 0
      }
    },
    {
      id: 4,
      title: "Начало работы",
      catogories: ["Для новичка", "Основы работы"],
      description: "Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете",
      status: {
        name: "Начато",
        allTask: 10,
        makeTast: 3
      }
    },
    {
      id: 5,
      title: "Работа с библиотеками GPN",
      catogories: ["Профессионалу", "Библиотеки"],
      description: "Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете",
      status: {
        name: "Неначато",
        allTask: 255,
        makeTast: 0
      }
    },
    {
      id: 6,
      title: "Введение в рабочую среду",
      catogories: ["Профессионалу", "Библиотеки"],
      description: "Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете",
      status: {
        name: "Неначато",
        allTask: 10,
        makeTast: 0
      }
    }
  ]

const Courses = () => {

    const bigCircleRef = useRef()

    function setProgress(percent, progressCircle) {

        let radius = progressCircle.r.baseVal.value;
        let circumference = radius * 2 * Math.PI;
        progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
        progressCircle.style.strokeDashoffset = circumference - (percent / 100) * circumference;
    }


    const getProgressLine = (percent, radius = 10) => {
        if (+radius == 10) {
            const circumference = radius * 2 * Math.PI;
            return (
                <circle className="small-circle" stroke="#24C38E" strokeWidth="2" cx="12" cy="12" r="10" fill="none"
                    style={{strokeDasharray: `${circumference} ${circumference}`, strokeDashoffset: `${circumference - (percent / 100) * circumference}`}}>
                </circle>
            )
        } else {
            const circumference = radius * 2 * Math.PI;
            return (
                <circle className="progress-ring__circle-prog progress-start" stroke="rgba(0, 32, 51, 0.08)" strokeWidth="16" cx="82.5" cy="82.5" r="74.5" fill="none"
                    style={{strokeDasharray: `${circumference} ${circumference}`, strokeDashoffset: `${circumference - (percent / 100) * circumference}`}}>
                </circle>
            )

        }

    }

    const renderCard = (arr) => {
        const parseArr = (arr) => {
            const tags = arr.map((mass, i) => {
              return (
                    <div className="categories__item" key={i}>
                        {mass}
                    </div>
                )
            })
            return tags
        }
        const res = arr.map((obj, i) => {
            if (obj.status.name == "Завершено") {
                return (
                    <div className="card-container__item item-card" id={obj.id} key={obj.id}>
                        <div className="item-card__title">{obj.title}</div>
                        <div className="item-card__categories categories">
                            {parseArr(obj.catogories)}
                        </div>
                        <div className="item-card-subtitle">{obj.description}</div>
                        <div className="item-card__bottom">
                            <a href="#" className="item-card__bottom-button"><img src="img/icons/circlearrow.svg" alt=""/>Продолжить</a>
                            <div className="item-card__bottom-progress">
                                <img src="img/icons/ponts.svg" alt=""/>
                            </div>
                        </div>
                    </div>
                )
            }
            else if (obj.status.name == "Начато") {
                return (
                    <div className="card-container__item item-card" key={obj.id}>
                        <div className="item-card__title">{obj.title}</div>
                        <div className="item-card__categories categories">
                            {parseArr(obj.catogories)}
                        </div>
                        <div className="item-card-subtitle">{obj.description}</div>
                        <div className="item-card__bottom">
                            <a href="#" className="item-card__bottom-button btn-blue">Продолжить тему</a>
                            <div className="item-card__bottom-progress">
                                <div className="item-card__bottom-progress-count">{obj.status.makeTast}/{obj.status.allTask}</div>
                                <div className="item-card__bottom-progress-label">заданий</div>
                                <svg className="progress-ring" width="24" height="24">
                                    <circle className="progress-ring__circle" stroke="rgba(0, 32, 51, 0.08)" strokeWidth="2" cx="12" cy="12" r="10" fill="none"/>
                                    {getProgressLine(obj.status.makeTast * 10)}
                                </svg>
                            </div>
                        </div>
                    </div>
                )
            } else if (obj.status.name == "Неначато") {
                return (
                    <div className="card-container__item item-card" key={obj.id}>
                        <div className="item-card__title">{obj.title}</div>
                        <div className="item-card__categories categories">
                            {parseArr(obj.catogories)}
                        </div>
                        <div className="item-card-subtitle">{obj.description}</div>
                        <div className="item-card__bottom">
                            <a href="#" className="item-card__bottom-button btn-blue">Начать</a>
                            <div className="item-card__bottom-progress">
                                <div className="item-card__bottom-progress-count">{obj.status.allTask}</div>
                                <div className="item-card__bottom-progress-label start">заданий</div>
                            </div>
                        </div>
                    </div>
                )
            }
        })

        return res
    }

    const arrCards = renderCard(dataWayFrontEnd)

    const allCatalog = renderCard(dataCatalogThemes)

    return (
        <div className="main" style={{overflowX: "hidden"}}> 
            <section className="themes">
                <div className="container themes-container">
                    <h1 className="themes-title">Рекомендуемые темы</h1>
                    <div className="themes-start">
                        <div className="themes-start__preloader">
                            <svg className="progress-ring" width="165" height="165">
                                <circle ref={bigCircleRef} className="progress-ring__circle" stroke="rgba(0, 32, 51, 0.08)" strokeWidth="16" cx="82.5" cy="82.5" r="74.5" fill="none"/>
                                <circle className="progress-ring__circle-prog progress-start" style={{"strokeDasharray": "468.097 468.097", "strokeDashoffset": "93.6195"}} stroke="#24C38E" strokeWidth="16" cx="82.5" cy="82.5" r="74.5" fill="none"/>
                                {/* {!bigCircleRef.current ? null : getProgressLine(80, bigCircleRef.current.getAttribute('r'))} */}
                                {/* {getProgressLine(80, bigCircleRef.current.getAttribute('r'))} */}
                                {/* <circle ref={bigCircleRef} className="progress-ring__circle-prog progress-start" style={() => setProgress(80, bigCircleRef.current)} stroke="#24C38E" strokeWidth="16" cx="82.5" cy="82.5" r="74.5" fill="none"/> */}
                            </svg>
                            <div className="themes-start__preloader-content">
                                <div className="themes-start__preloader-content-title">8/10</div>
                                <div className="themes-start__preloader-content-subtitle">заданий</div>
                            </div>
                        </div>
                        <div className="themes-start__content">
                            <div className="themes-start__content-title">Начало работы</div>
                            <div className="themes-start__content-categories categories">
                                <div className="categories__item">Для новичка</div>
                                <div className="categories__item">Основы работы</div>
                            </div>
                            <div className="themes-start-subtitle">Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете</div>
                            <div className="themes-start-button"><a href="#">Продолжить тему</a></div>
                        </div>
                    </div>
                    <div className="themes-start-more more">
                        <span></span>
                        <div className="more__button"><a href="#">Показать ещё<img src="img/icons/arrow.svg" alt="arrow" /></a></div>
                        <span></span>
                    </div>
                    <div className="themes-start-way way">
                        <div className="way-top">
                            <div className="way-top-left">
                                <h2 className="way-top-left__title">Путь Front End Developer</h2>
                                <div className="way-top-left__button"><a href="#">Скрыть пройденные</a></div>
                            </div>
                            <div className="way-top-right">
                                <div className="way-top-right__arrow-prev arrow-card"><img src="img/icons/arrowprev.svg" alt="" /></div>
                                <div className="way-top-right__arrow-next arrow-card"><img src="img/icons/arrownext.svg" alt="" /></div>
                            </div>
                        </div>
                        <div className="way-bottom">
                            <div className="way-bottom__card card">
                                <div className="card-container">
                                    {arrCards}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="catalog">
                <div className="container" style={{width: "1440px"}}>
                    <h2 className="catalog-title">Каталог тем</h2>
                    <nav className="catalog-navigation">
                        <a href="#" className="catalog-navigation__item active" id="all">Все</a>
                        <a href="#" className="catalog-navigation__item" id="work">Рабочая среда</a>
                        <a href="#" className="catalog-navigation__item" id="library">Библиотеки</a>
                        <a href="#" className="catalog-navigation__item" id="end">Пройденые</a>
                        <a href="#" className="catalog-navigation__item" id="not-end">Не пройденные</a>
                    </nav>
                    <div className="catalog__content" id="all">
                        {allCatalog}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Courses