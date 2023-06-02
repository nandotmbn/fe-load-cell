/* eslint-disable react-hooks/exhaustive-deps */
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import { Breadcrumb, DatePicker, Popconfirm, Table } from "antd";
import React, { useEffect, useState } from "react";
import moment from "moment";
import 'moment/locale/id'
import { Records } from "@/services";

function DashboardHistoryViews() {
	const [dataSource, setDataSource] = useState([]);
	const [totalWeight, setTotalWeight] = useState(0);
	const [selectedDate, setSelectedDate] = useState<string>("");

	const handleDelete = (recordId: string) => {
		Records.deleteRecords({isNotify: true, recordId})
			.then(res => {
				if(!res) return;
				getAllDataSource(false);
			})
	}

	const getAllDataSource = async (isAlert: boolean) => {
		Records.getAllRecords({
			isNotify: isAlert,
			date: selectedDate,
		}).then((res) => {
			if (!res) {
				setDataSource([]);
				setTotalWeight(0);
				return;
			}
			let totalWeight = 0;
			setDataSource(
				res.data.map((datum: any, i: number) => {
					totalWeight += datum.weight / 1000;
					return {
						key: i,
						_id: datum._id,
						time: datum.createdAt,
						date: datum.createdAt,
						weight: datum.weight / 1000,
					};
				}).reverse()
			);
			setTotalWeight(totalWeight);
		});
	};

	useEffect(() => {
		getAllDataSource(true);
	}, [selectedDate, setSelectedDate]);

	const columns = [
		{
			title: "Tanggal",
			dataIndex: "date",
			key: "date",
			render: (date: string) => {
				return <p>{moment(date).locale('id').format("dddd, MMMM Do YYYY")}</p>;
			},
		},
		{
			title: "Waktu",
			dataIndex: "time",
			key: "time",
			render: (date: string) => {
				return <p>{moment(date).locale('id').format("h:mm:ss")}</p>;
			},
		},
		{
			title: "Berat Ikan",
			dataIndex: "weight",
			key: "weight",
			render: (e: any) => <p>{e} Kg</p>,
		},
		{
			title: "Aksi",
			render: (e: any) => {
				return (
					<div className="flex flex-row gap-2">
						<Popconfirm
							title="Hapus penimbangan ini"
							description="Apakah anda yakin untuk menghapus penimbangan ini"
							onConfirm={() => {handleDelete(e._id)}}
							okText={
								<p className="text-blue-500 hover:text-white border-blue-100">
									Ya
								</p>
							}
							cancelText="Tidak"
						>
							<button className="px-2 py-1 bg-red-500 text-white rounded">
								<DeleteFilled />
							</button>
						</Popconfirm>
					</div>
				);
			},
		},
	];
	return (
		<div className="h-full">
			<Breadcrumb
				items={[
					{
						title: "Manajemen",
					},
					{
						title: "Riwayat",
					},
				]}
			/>

			<div className="m-0 overflow-auto overflow-hidden h-full w-full py-4">
				<div className="mt-4 flex flex-row justify-between">
					<div className="flex flex-2 flex-row gap-8">
						<div className="">
							<p>Total Perhitungan</p>
							<p className="text-4xl font-bold">
								{dataSource.length.toString()}
							</p>
						</div>
						<div className="">
							<p>Total Berat</p>
							<p className="text-4xl font-bold">{totalWeight.toFixed(2).toString()} Kg</p>
						</div>
					</div>
					<div className="flex flex-1 justify-center items-end flex-col gap-8">
						<DatePicker
							className="w-full"
							placeholder="Pilih tanggal perhitungan"
							onChange={(date) => setSelectedDate(date?.toISOString()?.toString() as string)}
						/>
					</div>
				</div>
				<div className="relative h-full flex-12">
					<div className="overflow-y-scroll absolute inset-0 scrollbar scrollbar-w-1 scrollbar-thumb-gray-900 scrollbar-track-blue-100 pb-16 pr-4">
						<div className="mt-4">
							<Table
								pagination={{ pageSize: 5 }}
								dataSource={dataSource}
								columns={columns}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DashboardHistoryViews;
