import React from 'react'
import { injectIntl } from 'react-intl'

export default function withUrlParam (WrappedComponent: React.FC<any>) {
    return injectIntl((props: any) => {
        const { id } = props.match.params

        return <WrappedComponent id={id} />
    })
}
