import Card from '../components/card'
const Header = () => {
    return (
        <header>
            <div className={'container'}>
                <div className={'row'}>
                    <Card></Card>
                    <Card></Card>
                </div>
            </div>
        </header>
    )
}

export default Header