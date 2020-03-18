import styled from 'styled-components'
import logoPic from '../../statics/logo.png'


export const HeaderWrapper = styled.div`
    position:relative;
    height:56px;
    border-bottom:1px solid  #f0f0f0;
`;
export const Logo= styled.a.attrs({
    href:'/'
})`
    position:absolute;
    top:0;
    left:0;
    height:56px;
    width:100px;
    display:block;
    background:url( ${ logoPic } );
    background-size:contain
`;

export const Nav = styled.div`
    width:960px;
    margin:0 auto;
    height:100%;
`

export const NavItem=styled.div`
    line-height:56px;
    padding:0 15px;
    font-size:17px;
    color:#333;
    &.left{
        float:left;
    }
    &.right{
        float:right;
        color:#969696;
    }
    &.active{
        color:#ea6f5a;
    }
`;
export const NavSearch=styled.input.attrs({
    placeholder:'搜索'
})`
    width:160px;
    height:38px;
    border:none;
    padding:0 20px;
    box-sizing:border-box;
    outline:none;
    border-radius:19px;
    background:#eee;
    margin-top:9px;
    font-size:14px;
    margin-left:20px;
    &::placeholder{
        color:#999;
    }
`
