export default function Data({ data }: { data: any }) {
	return (
		<div className="text-white">
			Length of pharms got : {data.pharmacies.length}
		</div>
	);
}
