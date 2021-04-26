import React from 'react'
import Index from '../pages/index'
import { render , fireEvent, getByText} from '@testing-library/react'


test('It should render  header section', () =>{

    const { getByText,  getByAltText} = render(<Index/>)

   const h1Element = getByText(/Chuusa/)

   const logoImgAlt = getByAltText(/logo/)

   expect(h1Element).toBeInTheDocument()

   expect(logoImgAlt).toBeInTheDocument()
})

test('It should render info section', () =>{

    const { getByText,} = render(<Index />)
              
    const h2Element = getByText(/Convert your word documents to pdf/i)

    const pElement = getByText(/Pay \$0/i)

    expect(h2Element).toBeInTheDocument()

    expect(pElement).toBeInTheDocument()
})

test('It should render form section', ()=>{
    const { getByText, getByLabelText} = render(<Index />)

    const pElement = getByText(/Drop a file here or/i)

    expect(pElement).toBeInTheDocument()

    const inputLabel = getByLabelText(/Browse file/i)

    expect(inputLabel).toBeInTheDocument(inputLabel)

})

// test('It should open dialog to pick a document', ()=>{

//     const { getByTestId , getByText} = render(<Index/>)

//     const fileInputLabel = getByTestId(/browse_file_label/)

//     //const fileInput = getByTestId(/browse_file_input/)

//     const file = new File(['(⌐□_□)'], 'nehecv.doc', { type: 'application/msword' });

//     fireEvent.change(fileInputLabel,{
//         target:{
//             files: [file]
//         }
//     })
    
//     expect(filfileInputLabeleInput.files[0].name).toBe('nehecv.doc')


// })