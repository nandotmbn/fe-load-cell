/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import { Breadcrumb, DatePicker, Modal, Popconfirm, Table } from "antd";
import React, { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/id";
import { Records } from "@/services";

import { PDFViewer } from "@react-pdf/renderer";

import {
	Document,
	Text,
	Page,
	StyleSheet,
	View,
	Image,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
	page: {
		height: "100%",
		marginVertical: 30,
		marginHorizontal: 30,
		fontSize: 30,
	},
	layout: {
		marginTop: 30,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	viewer: {
		width: "100%", //the pdf viewer will take up all of the width and height
		height: window.innerHeight,
	},
});

function DashboardHistoryViews() {
	const [dataSource, setDataSource] = useState([]);
	const [totalWeight, setTotalWeight] = useState(0);
	const [selectedDate, setSelectedDate] = useState<string>("");
	const [open, setOpen] = useState(false);

	const handleDelete = (recordId: string) => {
		Records.deleteRecords({ isNotify: true, recordId }).then((res) => {
			if (!res) return;
			getAllDataSource(false);
		});
	};

	const handleDownloadPdf = async () => {
		setOpen(true);
	};

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
				})
				// .reverse()
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
				return <p>{moment(date).locale("id").format("dddd, MMMM Do YYYY")}</p>;
			},
		},
		{
			title: "Waktu",
			dataIndex: "time",
			key: "time",
			render: (date: string) => {
				return <p>{moment(date).locale("id").format("h:mm:ss")}</p>;
			},
		},
		{
			title: "Berat Ikan",
			dataIndex: "weight",
			key: "weight",
			render: (e: any) => <p>{parseFloat(e).toFixed(2)} Kg</p>,
		},
		{
			title: "Aksi",
			render: (e: any) => {
				return (
					<div className="flex flex-row gap-2">
						<Popconfirm
							title="Hapus penimbangan ini"
							description="Apakah anda yakin untuk menghapus penimbangan ini"
							onConfirm={() => {
								handleDelete(e._id);
							}}
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
							<p className="text-xl md:text-4xl font-bold">
								{dataSource.length.toString()}
							</p>
						</div>
						<div className="">
							<p>Total Berat</p>
							<p className="text-xl md:text-4xl font-bold">
								{totalWeight.toFixed(2).toString()} Kg
							</p>
						</div>
					</div>
					<div className="hidden lg:flex flex-2 justify-center items-end flex-row gap-8">
						<DatePicker
							className="w-full flex-1 h-full"
							placeholder="Pilih tanggal perhitungan"
							onChange={(date) => {
								setSelectedDate(
									(date?.toISOString()?.toString() as string) || ""
								);
							}}
						/>
						<button
							className="text-xs flex-1 h-full bg-green-500 text-white rounded-xl"
							onClick={handleDownloadPdf}
						>
							Download Report
						</button>
					</div>
				</div>
				<div className="flex flex-row gap-2 h-16 mt-4 lg:hidden items-center justify-between">
					<DatePicker
						className="w-full h-full flex-2"
						placeholder="Pilih tanggal perhitungan"
						onChange={(date) =>
							setSelectedDate(date?.toISOString()?.toString() as string)
						}
					/>
					<button
						onClick={handleDownloadPdf}
						className="text-xs bg-green-500 h-full flex-1 text-white rounded-xl"
					>
						Download Report
					</button>
				</div>
				<div className="relative h-full flex-12">
					<div className="overflow-y-scroll absolute inset-0 scrollbar scrollbar-w-1 scrollbar-thumb-gray-900 scrollbar-track-blue-100 pb-16 pr-4">
						<div className="mt-4 pb-16">
							<Table
								pagination={{ pageSize: 5 }}
								dataSource={dataSource}
								columns={columns}
							/>
						</div>
					</div>
				</div>
			</div>
			<Modal
				title="Download"
				centered
				open={open}
				onOk={() => setOpen(false)}
				onCancel={() => setOpen(false)}
				width={1000}
			>
				<PDFViewer style={styles.viewer}>
					<Document>
						<Page size="A4" style={styles.page}>
							<Image
								src="/images/long-logo-invert.png"
								style={{ width: 200, marginLeft: -20 }}
							/>
							<Text>Laporan Penimbangan</Text>
							<Text style={{ fontSize: 12 }}>
								{selectedDate
									? moment(selectedDate).locale("id").format("LLLL")
									: moment(Date.now()).locale("id").format("LLLL")}
							</Text>

							<View
								style={{
									display: "flex",
									flexDirection: "row",
									// justifyContent: "space-between",
									gap: 8,
									marginTop: 28,
								}}
							>
								<Text style={{ fontSize: 16, width: 28 }}>No</Text>;
								<Text style={{ fontSize: 16, width: 80 }}>Berat</Text>;
								<Text style={{ fontSize: 16, width: 240 }}>Tanggal</Text>;
							</View>

							{dataSource?.map((val: any, _index: number) => {
								return (
									<View
										key={_index}
										style={{
											display: "flex",
											flexDirection: "row",
											// justifyContent: "space-between",
											marginTop: 28,
										}}
									>
										<Text style={{ fontSize: 16, width: 28 }}>{_index + 1}</Text>;
										<Text style={{ fontSize: 16, width: 80 }}>{parseFloat(val?.weight).toFixed(2)} Kg</Text>;
										<Text style={{ fontSize: 16, width: 240 }}>{moment(val.date).locale("id").format("LLLL")}</Text>;
									</View>
								);
							})}
						</Page>
					</Document>
				</PDFViewer>
			</Modal>
		</div>
	);
}

export default DashboardHistoryViews;
