import React from 'react';
import Link from '../Link';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './dropdown.css';

function UserDropdown() {
  return (
    <div className={s.userMenu}>
      <div className={s.settings}>
        <div className="col-xs-4">
          <img
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iMTI4cHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMjggMTI4OyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgd2lkdGg9IjEyOHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48cGF0aCBkPSJNMTE3LjQ4OCw3OC45NDhsLTEwLjQyNy03Ljc0MWMwLjAyNi0wLjE1OCwwLjA0NS0wLjMxNywwLjA3LTAuNDc2ICBjMC4wMTEtMC4wNjUsMC4wMTktMC4xMzEsMC4wMjktMC4xOTVjMC4xMDItMC42NzUsMC4xODgtMS4zNDksMC4yNTctMi4wMjRjMC4wMDQtMC4wMzYsMC4wMDctMC4wNywwLjAxMS0wLjEwNiAgYzAuMDcxLTAuNzA0LDAuMTI1LTEuNDA5LDAuMTYtMi4xMTRjMC4wMDMtMC4wMywwLjAwNC0wLjA2MiwwLjAwNS0wLjA5MmMwLjAzNC0wLjY5OCwwLjA1My0xLjM5NiwwLjA1NC0yLjA5NCAgYzAtMC4wMzUsMC4wMDItMC4wNywwLjAwMi0wLjEwNWMwLTAuMDM5LTAuMDAyLTAuMDc4LTAuMDAyLTAuMTE3YzAtMC4xNTIsMC4wMDMtMC4zMDYsMC4wMDEtMC40NThjLTAuMDAxLTAuMDI4LDAtMC4wNTYsMC0wLjA4NSAgYy0wLjAwNS0wLjMwNC0wLjAxOC0wLjYwNi0wLjAyOS0wLjkxYy0wLjAwOC0wLjE4OC0wLjAxNy0wLjM3NC0wLjAyNi0wLjU2MWMtMC4wMi0wLjM3Mi0wLjAzNC0wLjc0NC0wLjA2Mi0xLjExNSAgYy0wLjAwNC0wLjAzOC0wLjAwOS0wLjA3Ny0wLjAxMS0wLjExNWMtMC4wMDktMC4xMDktMC4wMi0wLjIxOS0wLjAyNy0wLjMyN2MtMC4wMTctMC4xOTctMC4wNC0wLjM5NC0wLjA1OS0wLjU5MSAgYy0wLjAwNS0wLjA0My0wLjAwOS0wLjA4Ni0wLjAxMy0wLjEyOGMtMC4wMDMtMC4wMjQtMC4wMDUtMC4wNS0wLjAwOC0wLjA3NGMtMC4wMTEtMC4wOTktMC4wMTktMC4xOTktMC4wMjktMC4yOTggIGMtMC4wMTQtMC4xMjMtMC4wMjEtMC4yNDYtMC4wMzYtMC4zNjhjLTAuMDA4LTAuMDY0LTAuMDE4LTAuMTI3LTAuMDI0LTAuMTljLTAuMDA5LTAuMDY5LTAuMDIxLTAuMTQtMC4wMy0wLjIwOSAgYy0wLjA2My0wLjUwNy0wLjEzNC0xLjAxMi0wLjIxNi0xLjUxNGMtMC4wMDctMC4wNDQtMC4wMS0wLjA4OC0wLjAxNy0wLjEzMmwxMC40NDEtNy43NTJjMi40NzgtMS40MywzLjMyNi00LjU5NywxLjg5Ni03LjA3NCAgbC04LjYzMS0xNC45NDljLTEuNDMtMi40NzctNC41OTgtMy4zMjUtNy4wNzQtMS44OTVsLTExLjkzNiw1LjE2N2MtMC4wNjYtMC4wNTUtMC4xMzgtMC4xMDItMC4yMDQtMC4xNTUgIGMtMC4wMzEtMC4wMjUtMC4wNjEtMC4wNS0wLjA5Mi0wLjA3NWMtMC4xNTQtMC4xMjUtMC4zMTMtMC4yNDUtMC40Ny0wLjM2OGMtMC4xNzEtMC4xMzUtMC4zNDEtMC4yNjgtMC41MTMtMC4zOTggIGMtMC4xNDEtMC4xMDctMC4yODMtMC4yMTEtMC40MjQtMC4zMTZjLTAuMDY1LTAuMDUtMC4xMzMtMC4wOTktMC4xOTktMC4xNDhjLTAuMTE2LTAuMDg1LTAuMjI5LTAuMTc0LTAuMzQ2LTAuMjU4ICBjLTAuMDY0LTAuMDQ3LTAuMTI4LTAuMDkzLTAuMTkzLTAuMTRjLTAuMTYyLTAuMTE1LTAuMzI2LTAuMjI2LTAuNDktMC4zMzljLTAuMDQxLTAuMDI4LTAuMDgyLTAuMDU4LTAuMTI0LTAuMDg2ICBjLTAuMDcxLTAuMDQ5LTAuMTQzLTAuMDk4LTAuMjE0LTAuMTQ2Yy0wLjIzOS0wLjE2My0wLjQ3OS0wLjMyMy0wLjcyMS0wLjQ4MWMtMC4wMjctMC4wMTctMC4wNTUtMC4wMzQtMC4wODItMC4wNTIgIGMtMC4zOTYtMC4yNTYtMC43OTQtMC41MDgtMS4xOTgtMC43NTFjLTAuMTAzLTAuMDYyLTAuMjA2LTAuMTItMC4zMS0wLjE4MWMtMC44NjgtMC41MTMtMS43NTItMC45OTktMi42NTYtMS40NTEgIGMtMC4wMTgtMC4wMDktMC4wMzQtMC4wMTctMC4wNTMtMC4wMjVjLTEuMTcxLTAuNTg1LTIuMzczLTEuMTE3LTMuNjAyLTEuNTk4Yy0wLjAzNC0wLjAxMy0wLjA2OC0wLjAyNi0wLjEwMi0wLjA0ICBjLTAuMTU3LTAuMDYxLTAuMzEzLTAuMTI3LTAuNDctMC4xODdsLTEuNDkzLTEyLjkyMmMwLjAwMS0yLjg2LTIuMzE3LTUuMTc5LTUuMTc4LTUuMTc5SDU1LjM2NWMtMi44NiwwLTUuMTc4LDIuMzE4LTUuMTc4LDUuMTc5ICBsLTEuNDkzLDEyLjkyMmMtMC4wNywwLjAyNi0wLjEzNywwLjA1Ni0wLjIwNywwLjA4MmMtMC4wODEsMC4wMzEtMC4xNjMsMC4wNjQtMC4yNDQsMC4wOTdjLTAuNDc3LDAuMTg1LTAuOTQ5LDAuMzc2LTEuNDE3LDAuNTc3ICBjLTAuMDg0LDAuMDM1LTAuMTY4LDAuMDc0LTAuMjUxLDAuMTFjLTAuNDI0LDAuMTg1LTAuODQ2LDAuMzc1LTEuMjY0LDAuNTcyYy0wLjA0NCwwLjAyMS0wLjA4OCwwLjA0My0wLjEzMiwwLjA2NCAgYy0wLjA1NSwwLjAyNi0wLjExLDAuMDUxLTAuMTY1LDAuMDc3Yy0wLjE1MywwLjA3NC0wLjMwNSwwLjE1LTAuNDU3LDAuMjI2Yy0wLjM1MSwwLjE3NS0wLjY5OCwwLjM1NS0xLjA0MywwLjU0ICBjLTAuMjUsMC4xMzMtMC41MDIsMC4yNjQtMC43NTEsMC40MDFjLTAuMTU3LDAuMDg4LTAuMzExLDAuMTgyLTAuNDY3LDAuMjcxYy0wLjAxMiwwLjAwNi0wLjAyNCwwLjAxNC0wLjAzNiwwLjAyMSAgYy0wLjAyOSwwLjAxNy0wLjA2LDAuMDI5LTAuMDg4LDAuMDQ2Yy0wLjA1MSwwLjAyOS0wLjA5OCwwLjA2My0wLjE0OCwwLjA5MWMtMC41NjUsMC4zMjgtMS4xMjIsMC42NjktMS42NzIsMS4wMjMgIGMtMC4wNjMsMC4wNC0wLjEyNSwwLjA4LTAuMTg3LDAuMTIxYy0wLjA2MywwLjA0MS0wLjEyOCwwLjA4Mi0wLjE5MiwwLjEyM2MtMC4wMTgsMC4wMTMtMC4wMzcsMC4wMjMtMC4wNTQsMC4wMzUgIGMtMC40NywwLjMxMS0wLjkzMywwLjYzMi0xLjM5MiwwLjk2MWMtMC4wNjQsMC4wNDYtMC4xMjksMC4wOTItMC4xOTMsMC4xMzljLTAuNTEzLDAuMzcyLTEuMDE5LDAuNzU3LTEuNTE3LDEuMTUyICBjLTAuMDg2LDAuMDY4LTAuMTczLDAuMTM3LTAuMjU4LDAuMjA2Yy0wLjEwOSwwLjA4OS0wLjIyMSwwLjE3Mi0wLjMyOSwwLjI2MmwtMTEuOTItNS4xNmMtMi40NzctMS40My01LjY0NS0wLjU4MS03LjA3NSwxLjg5NiAgTDguNjAyLDQxLjk5Yy0xLjQzMSwyLjQ3OS0wLjU4MSw1LjY0NiwxLjg5NSw3LjA3NmwxMC40MjksNy43NDJjLTAuMDIxLDAuMTI1LTAuMDM2LDAuMjUxLTAuMDU2LDAuMzc2ICBjLTAuMDIyLDAuMTQzLTAuMDQzLDAuMjg1LTAuMDYzLDAuNDI4Yy0wLjA4NywwLjU5NC0wLjE2NCwxLjE4Ny0wLjIyNywxLjc4Yy0wLjAxMiwwLjExNy0wLjAyMywwLjIzMy0wLjAzNSwwLjM1MSAgYy0wLjA1MiwwLjUzMS0wLjA5NiwxLjA2My0wLjEyOCwxLjU5NGMtMC4wMDIsMC4wNDEtMC4wMDQsMC4wODMtMC4wMDYsMC4xMjRjLTAuMDAzLDAuMDQ1LTAuMDA0LDAuMDktMC4wMDcsMC4xMzUgIGMtMC4wMDcsMC4xMTctMC4wMTIsMC4yMzUtMC4wMTgsMC4zNTNjLTAuMDI4LDAuNjA1LTAuMDQzLDEuMjExLTAuMDQ1LDEuODE1Yy0wLjAwMSwwLjA4NS0wLjAwNywwLjE2Ny0wLjAwNywwLjI1MiAgYzAsMC4wOTIsMC4wMDUsMC4xODUsMC4wMDUsMC4yNzdjMCwwLjA2Ny0wLjAwMSwwLjEzNSwwLDAuMjAyYzAsMC4wNzMtMC4wMDIsMC4xNDYsMCwwLjIyYzAuMDA0LDAuMjQ3LDAuMDE1LDAuNDk1LDAuMDI0LDAuNzQyICBjMC4wMSwwLjMyMSwwLjAyNywwLjY0MSwwLjA0NCwwLjk2YzAuMDE1LDAuMjY5LDAuMDI2LDAuNTM3LDAuMDQ2LDAuODA1YzAuMDAzLDAuMDM4LDAuMDA2LDAuMDc3LDAuMDA4LDAuMTE1ICBjMC4wMSwwLjEzMywwLjAyMiwwLjI2NiwwLjAzMywwLjM5N2MwLjAxNCwwLjE3MSwwLjAzNCwwLjM0MSwwLjA1LDAuNTExYzAuMDM3LDAuMzg1LDAuMDc0LDAuNzY5LDAuMTIxLDEuMTUgIGMwLDAuMDA1LDAuMDAyLDAuMDExLDAuMDAyLDAuMDE2YzAuMDcsMC41NjksMC4xNTEsMS4xMzUsMC4yNDQsMS42OThjMC4wMDUsMC4wMzIsMC4wMDcsMC4wNjUsMC4wMTMsMC4wOTlMMTAuNDk4LDc4Ljk1ICBjLTIuNDc4LDEuNDMtMy4zMjYsNC41OTctMS44OTUsNy4wNzNsOC42MywxNC45NDljMS40MywyLjQ3OCw0LjU5OCwzLjMyNiw3LjA3NCwxLjg5NmwxMS45MTgtNS4xNTYgIGMwLjA4MiwwLjA2OCwwLjE2OSwwLjEyNSwwLjI1MSwwLjE5MWMwLjAxNCwwLjAxMywwLjAzLDAuMDIyLDAuMDQ0LDAuMDMzYzAsMC4wMDIsMC4wMDIsMC4wMDIsMC4wMDIsMC4wMDMgIGMwLjEyOCwwLjEwNCwwLjI2LDAuMjA0LDAuMzksMC4zMDdjMC4yMDQsMC4xNjEsMC40MDgsMC4zMjIsMC42MTUsMC40NzljMC4xMiwwLjA5MiwwLjI0MSwwLjE4LDAuMzYyLDAuMjcxICBjMC4xNTksMC4xMTgsMC4zMTcsMC4yMzgsMC40NzgsMC4zNTVjMC4wMTgsMC4wMTMsMC4wMzQsMC4wMjUsMC4wNTEsMC4wMzljMC4wNzYsMC4wNTUsMC4xNSwwLjExLDAuMjI3LDAuMTY0ICBjMC4xODUsMC4xMzIsMC4zNzQsMC4yNTksMC41NjEsMC4zODdjMC4wMTYsMC4wMTMsMC4wMzMsMC4wMjMsMC4wNDksMC4wMzNjMC4wNzQsMC4wNTIsMC4xNDcsMC4xMDMsMC4yMjEsMC4xNTIgIGMwLjY1NSwwLjQ0NiwxLjMyMSwwLjg3NywyLjAwMiwxLjI4N2MwLjExOSwwLjA3MSwwLjIzOCwwLjE0LDAuMzU3LDAuMjA4YzAuODUzLDAuNTA0LDEuNzIzLDAuOTgxLDIuNjEyLDEuNDI4ICBjMC4wMywwLjAxNiwwLjA2MSwwLjAyOSwwLjA5MSwwLjA0NWMxLjM0NiwwLjY3LDIuNzI5LDEuMjgsNC4xNDksMS44MTJsMS40OTIsMTIuOTA0YzAsMi44NTksMi4zMTgsNS4xNzksNS4xNzksNS4xNzlsMTcuMjYxLDAuMDAxICBjMi44NTktMC4wMDEsNS4xNzktMi4zMTgsNS4xNzktNS4xOGwxLjQ5My0xMi45MDZjMC4wNzMtMC4wMjcsMC4xNDMtMC4wNTgsMC4yMTYtMC4wODVjMC4wNzItMC4wMjcsMC4xNDQtMC4wNTgsMC4yMTUtMC4wODYgIGMwLjQ4MS0wLjE4NiwwLjk1OS0wLjM3OSwxLjQzMi0wLjU4MWMwLjA5My0wLjAzOSwwLjE4NS0wLjA4MiwwLjI3Ny0wLjEyMmMwLjQyMi0wLjE4NSwwLjg0Mi0wLjM3MywxLjI1Ni0wLjU2OSAgYzAuMDM5LTAuMDIsMC4wNzktMC4wMzksMC4xMTgtMC4wNTljMC4wMDMtMC4wMDEsMC4wMDctMC4wMDMsMC4wMTEtMC4wMDVjMC4wNDQtMC4wMjEsMC4wOS0wLjA0LDAuMTM0LTAuMDYzICBjMC4xNjMtMC4wNzksMC4zMjYtMC4xNTksMC40ODctMC4yNGMwLjM0NS0wLjE3MSwwLjY4NS0wLjM0OSwxLjAyMy0wLjUyOWMwLjI1OC0wLjEzNywwLjUxNi0wLjI3LDAuNzcxLTAuNDExICBjMC4xMy0wLjA3MiwwLjI1OC0wLjE1LDAuMzg3LTAuMjI1YzAuMDQzLTAuMDI0LDAuMDg3LTAuMDUxLDAuMTMtMC4wNzZjMC4wMjItMC4wMTIsMC4wNDUtMC4wMjEsMC4wNjYtMC4wMzQgIGMwLjAzOC0wLjAyMSwwLjA3My0wLjA0NiwwLjExMS0wLjA2N2MwLjU4OC0wLjM0MSwxLjE2OS0wLjY5NiwxLjc0MS0xLjA2NWMwLjA0Mi0wLjAyNywwLjA4My0wLjA1NSwwLjEyNS0wLjA4ICBjMC4wODktMC4wNTksMC4xNzktMC4xMTQsMC4yNjctMC4xNzNjMC40ODMtMC4zMTgsMC45NjEtMC42NDksMS40MzMtMC45ODhjMC4wNDctMC4wMzMsMC4wOTItMC4wNjYsMC4xMzgtMC4xMDEgIGMwLjUzMS0wLjM4NSwxLjA1Ni0wLjc4MiwxLjU3LTEuMTkyYzAuMDctMC4wNTUsMC4xNDEtMC4xMSwwLjIwOS0wLjE2NWMwLjExNi0wLjA5NiwwLjIzNi0wLjE4NiwwLjM1Mi0wLjI4MWwxMS45Miw1LjE1OSAgYzIuNDc4LDEuNDMxLDUuNjQ1LDAuNTgxLDcuMDc0LTEuODk2bDguNjMxLTE0Ljk0OEMxMjAuODEzLDgzLjU0NSwxMTkuOTY1LDgwLjM3OCwxMTcuNDg4LDc4Ljk0OHogTTY0LDgyLjAxMyAgYy05Ljk0OCwwLTE4LjAxMy04LjA2NC0xOC4wMTMtMTguMDEzUzU0LjA1Miw0NS45ODYsNjQsNDUuOTg2UzgyLjAxNCw1NC4wNTIsODIuMDE0LDY0UzczLjk0OCw4Mi4wMTMsNjQsODIuMDEzeiIgc3R5bGU9ImZpbGw6IzJGMzQzNTsiLz48L3N2Zz4=" alt="" className={s.icon}
          />
        </div>
        <div className="col-xs-8">
          <h4 className={s.settingsTitle}>Settings</h4>
          <p className={s.titleDescription}>Edit your profile &amp; notifications</p>
        </div>
      </div>
      <Link to="/logout" className={s.logOut}>Log out</Link>
    </div>
  );
}

export default withStyles(s)(UserDropdown);