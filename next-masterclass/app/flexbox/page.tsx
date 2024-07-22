import Link from 'next/link';
//import Caixa from '@/components/Caixa'

export default function Page(){
    return(
        <div className='p-4'>
            <h1 className="font-black">Flexbox</h1>
            <div className='
            flex
            justify-between'>
            <Box texto="1"></Box>
            <Box texto="2"></Box>
            <Box texto="3"></Box>
            </div>
            <div>
                <nav>
            <Link href="/" aria-label="Voltar para a página inicial">
                <a className="text-blue-500 hover:text-blue-700">Home</a>
            </Link>
                </nav>
            </div>
        </div>
    )
}