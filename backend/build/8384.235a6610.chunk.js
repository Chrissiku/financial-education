"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[8384],{98384:(m,a,s)=>{s.r(a),s.d(a,{CreateActionEE:()=>P});var t=s(74081),i=s(10701),E=s(2981),r=s(50703),o=s(48102),d=s(15206),e=s(16543),M=s(69439),l=s(70627),_=s(61020),D=s(66360),n=s(27279),C=s(15530),O=s(40464);const P=({onClick:L})=>{const{formatMessage:c}=(0,_.Z)(),{license:{permittedSeats:A,shouldStopCreate:u},isError:v,isLoading:I}=(0,D.u)();return v||I?null:(0,t.jsxs)(i.k,{gap:2,children:[!M(A)&&u&&(0,t.jsx)(E.u,{description:c({id:"Settings.application.admin-seats.at-limit-tooltip",defaultMessage:"At limit: add seats to invite more users"}),position:"left",children:(0,t.jsx)(r.J,{width:`${14/16}rem`,height:`${14/16}rem`,color:"danger500",as:d.Z})}),(0,t.jsx)(o.z,{"data-testid":"create-user-button",onClick:L,startIcon:(0,t.jsx)(e.Z,{}),size:"S",disabled:u,children:c({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"})})]})};P.propTypes={onClick:l.func.isRequired}},66360:(m,a,s)=>{s.d(a,{u:()=>r});var t=s(27279),i=s(15530),E=s(40464);function r({enabled:o}={enabled:!0}){const{get:d}=(0,i.kY)(),{data:e,isError:M,isLoading:l}=(0,E.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:n}}=await d("/admin/license-limit-information");return n},{enabled:o}),_=t.useMemo(()=>e??{},[e]),D=t.useCallback(n=>(_?.features??[]).find(O=>O.name===n)?.options??{},[_?.features]);return{license:_,getFeature:D,isError:M,isLoading:l}}}}]);