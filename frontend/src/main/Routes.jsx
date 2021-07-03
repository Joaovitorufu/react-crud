
import {Route, Switch, Redirect} from 'react-router'

import { Home } from '../components/home/Home'
import {UserCrud} from '../components/user/UserCrud'

export const Routes = () => {
    return(
        <Switch>
            <Route exact patch='/' component={Home}/>
            <Route patch='/users' component={UserCrud}/>
            <Redirect from='*' to='/'/>
        </Switch>
    )


}
    


