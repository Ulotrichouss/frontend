import React from "react";
import {
  UserGroupIcon,
  AcademicCapIcon,
  BookOpenIcon,
} from "@heroicons/react/outline";
import UserAvatar from "../UserAvatar";
import { Link } from "react-router-dom";
function CourseCard(props) {
  return (
    <div className="relative group">
      <img
        src={"https://coursespec.000webhostapp.com/storage/" + props.data.courseCover}
        className="h-44 w-full object-cover overflow-hidden rounded-3xl shadow group-hover:shadow-sm"
      />
      <div className="absolute -top-5 right-5 bg-green-400 text-white rounded-3xl shadow-md">
        <div className="px-5 py-1">
          <div className="flex items-center">
            <span className="text-3xl mr-1">
              {props.data.numberOfAssignments}
            </span>
            <AcademicCapIcon className="w-6 font-base" />
          </div>
          <span className="font-medium">Assignments</span>
        </div>
      </div>
      <div className="px-5 py-3 bg-white rounded-3xl shadow group-hover:shadow-sm">
        <p
          className="text-gray-600 text-lg font-medium truncate"
          title={props.data.courseTitle}
        >
          {props.data.courseTitle}
        </p>
        <div className="pt-2">
          <div className="flex items-center">
            <UserAvatar link={props.data.teacherAvatar} />
            <Link
              to={"profile/" + props.data.teacherId}
              className="text-base font-medium text-gray-500"
            >
              {props.data.teacherName}
            </Link>
          </div>
          <div className="flex items-center mt-2 text-xs">
            <div className="flex items-center text-gray-400 mr-5">
              <UserGroupIcon className="w-5 mr-1" />
              {props.data.numberOfStudents} students
            </div>
            <div className="flex items-center text-gray-400">
              <BookOpenIcon className="w-5 mr-1" />
              {props.data.numberOfMaterials} materials
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CourseCard;
