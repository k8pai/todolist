import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

export default function NamingErrorMessage(props) {
	
	const { errorMessage } = props;

	return (
		<div className='transition-opacity duration-500 ease-in-out'>
				{errorMessage?<motion.div
					initial={{ opacity: errorMessage?0:1 }}
					animate={{ opacity: 1 }}
					transition={{duration: .5, delay: .25}}
					className={'p-2 my-3 text-red-600 text-lg font-semibold transition-all ease-in font-mono flex items-center justify-center'}> 
					{errorMessage}
				</motion.div>:null}
				{errorMessage?null:<motion.div
				 	initial={{ opacity: errorMessage?1:0 }}
				 	animate={{ opacity: 1 }}
				 	transition={{duration: .5, delay: .25}}
				 	className='p-2 my-3 text-lg xsm:text-base font-semibold transition-all ease-in font-mono flex items-center justify-center'> 
				 	Pick a name for your list!
				</motion.div>}
			{/* } */}
		</div>
	)
}




				