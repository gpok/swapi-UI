import React, {useEffect, useState} from 'react';
import './App.scss';
import Loading from "./Common/Components/Loading/Loading";
import AnimatedBackground from "./Layout/AnimatedBackground/AnimatedBackground";
import TabWindow from "./Common/Components/TabWindow/TabWindow";
import SlidingContainer, {SlideTypes} from "./Layout/SlidingContainer/SlidingContainer";
import Swapi from "./Common/Services/Swapi";
import EntriesMenu from "./Layout/EntriesMenu/EntriesMenu";
import Entry from "./Layout/Entry/Entry";
import Quotes from "./Layout/Quotes/Quotes";
import {requestTypes} from "./Common/Services/Swapi/settings";

function App() {
    const [initialLoading, setInitialLoading] = useState(true);
    const [entriesMenuLoading, setEntriesMenuLoading] = useState(false);
    const [contentLoading, setContentLoading] = useState(false);
    const [contentList, setContentList] = useState({});
    const [content, setContent] = useState(null);

    const LoadEntriesList = (type, pageNumber) => {
        setEntriesMenuLoading(true);
        Swapi.GetListByType(type, pageNumber, (data)=>{
            setContentList({...data, page: pageNumber});
            setEntriesMenuLoading(false);
        })
    }

    const ApplyContent = (data) =>{
        setContent(data);
        setContentLoading(false);
    }
    const loadEntry = (type, url) => {
        setContentLoading(true);
        Swapi.GetByTypeUrl(type, url, ApplyContent, true);
    }

    useEffect(()=>{
        Swapi.People.GetAll(1, (data)=>{
            setContentList({...data, page: 1});
            setTimeout(()=>{
                setInitialLoading(false);
                setEntriesMenuLoading(false);
            }, 1000);
        })
    }, []);

    const buttons = [
        {
            label: "Characters",
            onClick: () => {LoadEntriesList(requestTypes.people, 1)}
        },
        {
            label: "Planets",
            onClick: () => {LoadEntriesList(requestTypes.planets, 1)}
        },
        {
            label: "Vehicles",
            onClick: () => {LoadEntriesList(requestTypes.vehicles, 1)}
        }
    ];

    return (
    <div className="App">
        <AnimatedBackground animate={!initialLoading}/>

        <div className={"SiteContent"}>
            <SlidingContainer slideType={SlideTypes.FromLeft} opened={!initialLoading} style={{width: "400px", marginTop: "30px"}}>
                <TabWindow buttons={buttons}>
                    <EntriesMenu contentList={contentList} entriesListLoadingFunction={LoadEntriesList} onEntryClick={loadEntry} style={{height: "calc(100% - 60px)"}}/>
                    <Quotes style={{height: "60px"}}/>
                    <Loading loading={entriesMenuLoading}/>
                </TabWindow>
            </SlidingContainer>
            <SlidingContainer slideType={SlideTypes.FromRight} opened={!initialLoading} style={{width: "calc(100% - 400px)"}}>
                <TabWindow buttons={[]}>
                    <Entry content={content} loadEntryFunction={loadEntry}/>
                    <Loading loading={contentLoading}/>
                </TabWindow>
            </SlidingContainer>
        </div>

        <Loading loading={initialLoading}/>
    </div>
    );
}

export default App;
