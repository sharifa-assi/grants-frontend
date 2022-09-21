import { useContext } from 'react'
import { ApiClientsContext } from 'pages/_app'
import NavbarLayout from 'libraries/ui/navbarLayout'
import AddToSafe from 'src/v2/components/Safe/AddToSafe'
import Dashboard from 'src/v2/components/Safe/Dashboard'


function Safe() {
	const { workspace } = useContext(ApiClientsContext)!

	return (
		workspace?.safe ? <Dashboard /> : <AddToSafe />
	)
}

Safe.getLayout = function(page: React.ReactElement) {
	return (
		<NavbarLayout>
			{page}
		</NavbarLayout>
	)
}

export default Safe