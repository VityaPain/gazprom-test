import React, {useState, useEffect, useRef} from "react";

import TestServices from "../../services/TestServices";

const OrganizationsList = () => {
    const {GetLocation} = TestServices()
    const [adres, setAdres] = useState('')

    const getCoordUser = () => {
        navigator.geolocation.getCurrentPosition(function(position) {
            GetLocation({lat: position.coords.latitude, lon: position.coords.longitude}).then(result => setAdres(result))
        })
    }

    useEffect(() => {
        getCoordUser()
    }, [])


    const [allOrganizations, setAllOrganizations] = useState([])
    const [searchText, setSearchText] = useState('')
    const [searchMode, setSearchMode] = useState('name')

    const [selectedOrganization, setSelectedOrganization] = useState()

    const {getAdresses} = TestServices()


    // const onRequest = () => {
    //     getAdresses({query: ""}).then(res => console.log(res))
    // }

    const changeText = (text) => {
        setSearchText(text)
        getAdresses({query: text}).then(res => setAllOrganizations(res))
    }

    const setSearchInput = (e) => {
        console.log(e.target.innerText)
        setSearchText(e.target.innerText)
        
        getAdresses({query: e.target.id}).then(res => console.log(res[0]))
        getAdresses({query: e.target.id}).then(res => setSelectedOrganization(res[0]))
        // console.log(selectedOrganization)
        setAllOrganizations(null)
    }

    const changeModeSearch = (e) => {
        if (e.target.classList.contains('addres')) {
            setSearchMode('addres')
        } else if (e.target.classList.contains('inn')) {
            console.log('INN')
            setSearchMode('inn')
        } else {
            setSearchMode('name')
        }
    }

    return (
        <section className="organizations" style={{paddingBottom: "150px"}}>
            <div className="organizations-container container">
                <h2 className="organizations-title">Ваш город: {adres}</h2>
                <div className="organizations-find">
                    <input size="50" type="text" value={searchText} placeholder="Название / ИНН / Адрес" onChange={(e) => changeText(e.target.value)}/>
                    {allOrganizations && allOrganizations.map((item,i) => {
                        return (
                            <div className="organizations-find__item" key={item.data.inn} id={item.data.inn} onClick={e => setSearchInput(e)}>
                                {'Адрес: ' + item.data.address.value + ' ИНН: ' + item.data.inn + ' Название: ' + item.value}
                            </div>
                        )
                    })}

                    {!selectedOrganization ? null : <div className="organizations-find__rez" >
                            <div className="organizations-find__rez-inn"><span>ИНН:</span> {selectedOrganization.data.inn}</div>
                            <div className="organizations-find__rez-name"><span>Название:</span> {selectedOrganization.value}</div>
                            <div className="organizations-find__rez-adres"><span>Адрес:</span> {selectedOrganization.data.address.value}</div>
                            <div className="organizations-find__rez-status"><span>Статус:</span> {selectedOrganization.data.state.status  == 'ACTIVE' ?
                                                                    'Действующая' : selectedOrganization.data.state.status  == 'LIQUIDATING' ?
                                                                    'Ликвидируется' : selectedOrganization.data.state.status  == 'LIQUIDATED' ?
                                                                    'Ликвидирована' : selectedOrganization.data.state.status  == 'BANKRUPT' ?
                                                                    'Банкротство' : 'в процессе присоединения к другому юрлицу, с последующей ликвидацией'}</div>
                            <div className="organizations-find__rez-manag"><span>Руководитель:</span> {selectedOrganization.data.management.name}</div>
                            <div className="organizations-find__rez-count"><span>Кол-во филиалов:</span> {selectedOrganization.data.branch_count}</div>
                        </div>}
                </div>
            </div>
        </section>
    )
}

export default OrganizationsList