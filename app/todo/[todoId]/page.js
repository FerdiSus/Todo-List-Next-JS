function Page({ params }) {
    return (
        <mai className='px-5 py-10'>
            <h1>
                INI DETAIL TODO ID{' '} 
                <b>
                    {params?.todoId}
                </b>
            </h1>
        </mai>
    )
}

export default Page;