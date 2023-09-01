import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"
import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { routeConfig } from "shared/config/routeConfig/routeConfig"


export const AppRouter = () => {
    
    return (
        <Suspense fallback={<span>идет загрузка страницы</span>}>
            <Routes>
                {Object.values(routeConfig).map(({path, element}) => <Route  key={path} path={path} element={element}/>)}               
            </Routes>
        </Suspense>
    )
}