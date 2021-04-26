import { ChangeEventHandler, DragEventHandler } from "react"

type HomeProps = {
    API_END_POINT : string
}

type FormProps = {
    styles: any,
    dropHandler: DragEventHandler,
    dragOverHandler: DragEventHandler,
    isProcessing: boolean,
    onInputChangedHandler: ChangeEventHandler
}

type HeaderProps = {
    styles: any
}

type InfoProps = {
    styles: any
}

type MessageProps = {
    styles: any,
    failure: boolean,
    success: boolean,
    base64String: string,
    errorMessage: string,
    fileName: string
}

export type {HomeProps, FormProps, HeaderProps,InfoProps, MessageProps}